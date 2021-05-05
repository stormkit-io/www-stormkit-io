<template>
  <main>
    <sk-info-box theme="info" class="mb-4">
      Based on your
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      Stormkit determines whether your application is served as single page or
      hybrid application.
    </sk-info-box>
    <sk-spa title="Nuxt.js single page applications" />
    <h2 id="nuxt">Nuxt.js hybrid applications</h2>
    <section>
      <p>
        For nuxt.js projects, we can either tell Nuxt.js to point static assets
        directly to our CDN or can provide the
        <code>stormkit.config.yml</code> file. There is no preferred way,
        however, the <code>nuxt.config.js</code> is less locked-in way.
      </p>
      <h3 class="mt-8">Method 1: Using stormkit.config.yml</h3>
      <p>
        This configuration will tell Stormkit to rewrite the
        <code>_nuxt</code> prefix to <code>/</code> and serve anything under
        this path from the CDN.
      </p>
      <pre><code>{{nuxtJsStormkitConfig}}</code></pre>
      <p>
        The <code>replace</code> is needed because Nuxt.js does not create a
        physical <code>_nuxt</code> folder during build and we need to make our
        CDN aware of this.
      </p>
      <h3 class="mt-8">Method 2: Using nuxt.config.js</h3>
      <p>
        The alternative method is to use the <code>PUBLIC_URL</code> environment
        variable (which is injected by Stormkit during build time) and tell
        Nuxt.js to serve the static files from a different path. The following
        configuration will work either on local environments or Stormkit, as
        when the environment variable is not defined it will fallback to the
        default behaviour.
      </p>
      <pre><code>{{nuxtJsConfig}}</code></pre>
      <p></p>
    </section>
  </main>
</template>
<script>
import SkSpa from './-spa'
import SkInfoBox from '~/components/atoms/InfoBox'

const nuxtJsStormkitConfig = `app:
- redirects:
    - from: /_nuxt/*
      to: /
      replace: true
      cdn: true`

const nuxtJsConfig = `module.exports = {
  build: {
    publicPath: process.env.PUBLIC_URL,
  }
}`
export default {
  layout: 'docs',

  components: {
    SkInfoBox,
    SkSpa,
  },

  data() {
    return {
      nuxtJsConfig,
      nuxtJsStormkitConfig,
    }
  },

  head() {
    return {
      title: 'Stormkit - Nuxt.js applications',
    }
  },
}
</script>
