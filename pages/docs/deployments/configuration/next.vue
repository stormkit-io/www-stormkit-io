<template>
  <main>
    <sk-info-box theme="info" class="mb-4">
      Based on your
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      Stormkit determines whether your application is served as single page or
      hybrid application.
    </sk-info-box>
    <sk-info-box theme="warning" class="mb-4">
      <p>
        You will need to provide a <code>next.config.js</code> file in order to
        tell Stormkit that this is a Next.js framework. In the next releases
        this won't be needed however for now you'll have to add the config file
        even if it's empty.
      </p>
      <pre><code>{{nextJsTargetServerless}}</code></pre>
    </sk-info-box>
    <h2>Next.js</h2>
    <section>
      <p>
        If you're using the serverless version of Next.js, you'll have to extend
        <code>next.config.js</code> and add a
        <code>target: "serverless"</code> declaration to it. The following
        configuration works for both local environments and Stormkit:
      </p>
      <pre><code>{{nextJsTargetServerlessExtended}}</code></pre>
    </section>
    <sk-spa title="Next.js single page applications" />
    <h2 id="next">Next.js hybrid applications</h2>
    <section>
      <p>
        For hybrid projects, we can either tell Next.js to point static assets
        directly to our CDN or can provide the
        <code>stormkit.config.yml</code> file. There is no preferred way,
        however, the <code>next.config.js</code> is less locked-in way.
      </p>
      <h3 class="mt-8">Method 1: Using stormkit.config.yml</h3>
      <p>
        This configuration will tell Stormkit to serve anything that is under
        <code>_next</code> from the CDN. Stormkit also uploads all contents
        inside the <code>public</code> folder to the CDN. The public files are
        not prefixed with <code>_next</code>
        so we need to tell Stormkit those files directly from the CDN.
      </p>
      <pre><code>{{nextJsStormkitConfig}}</code></pre>
      <p>
        The <code>replace</code> is needed because Nuxt.js does not create a
        physical <code>_nuxt</code> folder during build and we need to make our
        CDN aware of this.
      </p>
      <h3 class="mt-8">Method 2: Using next.config.js</h3>
      <p>
        The alternative method is to use the <code>PUBLIC_URL</code> environment
        variable (which is injected by Stormkit during build time) and tell
        Next.js to serve the static files from a different path. The following
        configuration will work either on local environments or Stormkit, as
        when the environment variable is not defined it will fallback to the
        default behaviour.
      </p>
      <pre><code>{{nextJsConfig}}</code></pre>
    </section>
  </main>
</template>
<script>
import SkSpa from './-spa'
import SkInfoBox from '~/components/atoms/InfoBox'

const nextJsStormkitConfig = `app:
- redirects:
    - from: /_next/*
      cdn: true
    - ext: js,css,ico,png,jpg,svg
      cdn: true`

const nextJsTargetServerless = `module.exports = {}`
const nextJsTargetServerlessExtended = `module.exports = {
  target: process.env.SK_APP_ID ? "serverless" : "server"
}`

const nextJsConfig = `module.exports = {
  assetPrefix: process.env.PUBLIC_URL || "/"
}`

export default {
  layout: 'docs',

  components: {
    SkInfoBox,
    SkSpa
  },

  data() {
    return {
      nextJsConfig,
      nextJsStormkitConfig,
      nextJsTargetServerless,
      nextJsTargetServerlessExtended
    }
  },

  head() {
    return {
      title: 'Stormkit - Next.js applications'
    }
  }
}
</script>
