<template>
  <main>
    <sk-info-box theme="info" class="mb-4">
      Based on your
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      Stormkit determines whether your application is served as single page or
      hybrid application.
    </sk-info-box>
    <sk-spa title="Angular single page applications" />
    <h2 id="angular">Angular hybrid applications</h2>
    <section>
      <p>
        With Angular projects, you'll need to modify the app slightly and
        prepare it for Serverless environments. Since in the serverless
        environments we don't have a concept of long-lived process, we'll need
        to tell Angular not to listen to any port but rather directly export the
        app.
      </p>
      <h3>server.ts</h3>
      <pre><code>{{angularServerTs}}</code></pre>
      <h3>webpack.server.config.js</h3>
      <pre><code>{{angularWebpack}}</code></pre>
      <p>
        Instead of using the <code>PUBLIC_URL</code> you can also tell Stormkit
        to load specific files from the CDN. Here is an example but more
        information can be found under
        <nuxt-link to="/docs/features/redirects-and-path-rewrites"
          >redirects &amp; path rewrites</nuxt-link
        >
        section.
      </p>
      <pre><code>{{customAppConfig}}</code></pre>
    </section>
  </main>
</template>
<script>
import SkSpa from './-spa'
import SkInfoBox from '~/components/atoms/InfoBox'

const angularServerTs = `// server.ts

// You may still want to keep this around for local development
// The SK_APP_ID is injected on build time by Stormkit. This way you
// can distinguish between Stormkit and local environments.
if (!process.env.SK_APP_ID) {
  app.listen(PORT, () => {
    console.log(\`Node server listening on http://localhost:\${PORT}\`);
  });
}

export default app; // app is the return value of the express() call.`

const angularWebpack = `module.exports = {
  output: {
    // Tell webpack to serve static assets from the PUBLIC_URL 
    // which is injected during build time dynamically.
    publicPath: process.env.PUBLIC_URL || "/",
    // By specifying the libraryTarget we tell webpack to 
    // export the app from the bundled file.
    libraryTarget: "commonjs"
  }  
}`

const customAppConfig = `app:
- redirects:
    - ext: js,css,ico,png,jpg
      cdn: true`

export default {
  layout: 'docs',

  components: {
    SkInfoBox,
    SkSpa,
  },

  data() {
    return {
      angularServerTs,
      angularWebpack,
      customAppConfig,
    }
  },

  head() {
    return {
      title: 'Stormkit - Angular applications',
    }
  },
}
</script>
