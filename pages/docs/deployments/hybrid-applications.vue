<template>
  <main>
    <sk-info-box theme="info" class="mb-4">
      Based on your
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      Stormkit determines whether your application is served as single page or
      hybrid application.
    </sk-info-box>
    <h1 id="hybrid-applications">Hybrid applications</h1>
    <section>
      <p>
        If you provide the <code>Server file</code> setting or turn on the
        <code>Serverless</code> switch your application will be served from the
        Lambda function. Your client side assets, on the other side, will still
        be uploaded to our CDN bucket. By default, when server side logic is
        enabled, Stormit redirects all requests to the Lambda function. Since
        your client side assets are not uploaded there to save space and speed
        up cold starts, you'll need to tell Stormkit which files you'd like to
        be served from the CDN. To do so, simply add a
        <code>stormkit.config.yml</code> file at the root level of your
        repository and write the following configuration:
      </p>
      <pre><code>{{hybridConfig}}</code></pre>
      <p>
        This configuration will tell Stormkit to load all files with
        <code>js</code>,<code>css</code>,<code>ico</code>,<code>png</code>,<code
          >jpg</code
        >
        extensions directly from the CDN. For more information and examples you
        can check
        <nuxt-link to="/docs/features#redirects-and-path-rewrites"
          >redirects &amp; path rewrites</nuxt-link
        >.
      </p>
    </section>
  </main>
</template>
<script>
import SkInfoBox from '../../../components/atoms/InfoBox'

const hybridConfig = `app:
- redirects:
    - ext: js,css,ico,png,jpg
      cdn: true`

export default {
  layout: 'docs',
  components: {
    SkInfoBox
  },
  data() {
    return {
      hybridConfig
    }
  }
}
</script>
