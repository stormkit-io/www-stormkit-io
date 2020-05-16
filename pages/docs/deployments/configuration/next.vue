<template>
  <main>
    <sk-info-box theme="info" class="mb-4">
      Based on your
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      Stormkit determines whether your application is served as single page or
      hybrid application.
    </sk-info-box>
    <sk-spa title="Next.js single page applications" />
    <h2 id="next">Next.js hybrid applications</h2>
    <section>
      <p>
        First thing, we need to make sure that the <code>target</code> property
        in the <code>next.config.js</code> is set to <code>serverless</code>
      </p>
      <pre><code>{{nextJsTargetServerless}}</code></pre>
      <p>
        For next.js projects, we can either tell Next.js to point static assets
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

const nextJsTargetServerless = `module.exports = {
  target: "serverles"  
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
      nextJsTargetServerless
    }
  },

  head() {
    return {
      title: 'Stormkit - Next.js applications'
    }
  }
}
</script>
