<template>
  <main>
    <h1>Hosting Nuxt.js applications on Stormkit</h1>
    <section>
      <p>You can build, deploy and scale Nuxt.js applications on Stormkit.</p>
      <p></p>
    </section>

    <h2 id="hybrid">Nuxt.js static websites</h2>
    <section>
      <ol>
        <li>Go to your application.</li>
        <li>Click on your environment and then click on <b>Edit</b>.</li>
        <li>Turn off the serverless toggle to enable static websites.</li>
        <li>
          If you are using <code>nuxt generate</code> you don't have to do
          anything else. Make sure to use <code>npm</code> or
          <code>yarn</code> to run the build command. For instance,
          <code>npm run export</code>.
        </li>
      </ol>
    </section>
    <sk-spa title="Nuxt.js single page applications" />
    <h2 id="hybrid">Nuxt.js hybrid applications</h2>
    <section>
      <ol>
        <li>Go to your application.</li>
        <li>Click on your environment and then click on <b>Edit</b>.</li>
        <li>Turn on the serverless toggle to enable serverless websites.</li>
        <li>
          Follow one of the two methods below to serve the static files from the
          CDN:
          <h3 class="mt-2">Method 1: Using stormkit.config.yml</h3>
          <p>
            This configuration will tell Stormkit to rewrite the
            <code>_nuxt</code> prefix to <code>/</code> and serve anything under
            this path from the CDN.
          </p>
          <pre><code>{{nuxtJsStormkitConfig}}</code></pre>
          <p>
            The <code>replace</code> is needed because Nuxt.js does not create a
            physical <code>_nuxt</code> folder during build and we need to make
            our CDN aware of this.
          </p>
          <h3 class="mt-2">Method 2: Using nuxt.config.js</h3>
          <p>
            The alternative method is to use the
            <code>PUBLIC_URL</code> environment variable (which is injected by
            Stormkit during build time) and tell Nuxt.js to serve the static
            files from a different path. The following configuration will work
            either on local environments or Stormkit, as when the environment
            variable is not defined it will fallback to the default behaviour.
          </p>
          <pre><code>{{nuxtJsConfig}}</code></pre>
        </li>
      </ol>
      <p></p>
    </section>
  </main>
</template>
<script>
import SkSpa from './-spa'

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
  components: {
    SkSpa,
  },

  layout: 'docs',

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
