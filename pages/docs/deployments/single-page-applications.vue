<template>
  <main>
    <sk-info-box theme="info" class="mb-4">
      Based on your
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      Stormkit determines whether your application is served as single page or
      hybrid application.
    </sk-info-box>
    <h1>Single Page Applications</h1>
    <section>
      <p>
        If you omit the <code>Server file</code> setting or turn off the
        <code>Serverless</code> switch your application will be directly served
        from our CDN, without hitting any Lambda function. Most of the time,
        you'll need to tell Stormkit to redirect all requests to
        <code>index.html</code>. To do so, simply add a
        <code>stormkit.config.yml</code> file at the root level of your
        repository and write the following configuration:
      </p>
      <pre><code>{{spaConfig}}</code></pre>
    </section>
  </main>
</template>
<script>
import SkInfoBox from '../../../components/atoms/InfoBox'

const spaConfig = `app:
- redirects:
    - from: /*
      to: /index.html
      assets: false
`

export default {
  layout: 'docs',

  components: {
    SkInfoBox
  },

  data() {
    return {
      spaConfig
    }
  },

  head() {
    return {
      title: 'Stormkit - Single page application'
    }
  }
}
</script>
