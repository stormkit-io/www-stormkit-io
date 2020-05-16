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
        repository and configure it accordingly:
      </p>
    </section>
    <h2 id="nuxt">Nuxt.js hybrid applications</h2>
    <section>
      <p>
        For nuxt.js projects, we can either tell Nuxt.js to point static assets
        directly to our CDN or can provide the
        <code>stormkit.config.yml</code> file. There is no preferred way,
        however, the <code>nuxt.config.js</code> is less locked-in way.
      </p>
      <h3>Using stormkit.config.yml</h3>
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
      <h3>Using nuxt.config.js</h3>
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
    <h2 id="nuxt">Next.js hybrid applications</h2>
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
      <h3>Using stormkit.config.yml</h3>
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
      <h3>Using next.config.js</h3>
      <p>
        The alternative method is to use the <code>PUBLIC_URL</code> environment
        variable (which is injected by Stormkit during build time) and tell
        Next.js to serve the static files from a different path. The following
        configuration will work either on local environments or Stormkit, as
        when the environment variable is not defined it will fallback to the
        default behaviour.
      </p>
      <pre><code>{{nextJsConfig}}</code></pre>
      <p></p>
    </section>
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

    <h2 id="custom-app">Custom hybrid applications</h2>
    <section>
      <p>
        If you're using custom server side logic you can either tell your
        bundler to serve static assets directly from the CDN or tell Stormkit
        which files to load from the CDN.
      </p>
      <h3>Using stormkit.config.yml</h3>
      <pre><code>{{customAppConfig}}</code></pre>
      <p>
        This configuration will tell Stormkit to load all files with
        <code>js</code>,<code>css</code>,<code>ico</code>,<code>png</code>,<code
          >jpg</code
        >
        extensions directly from the CDN. For more information and examples you
        can check
        <nuxt-link to="/docs/features/redirects-and-path-rewrites"
          >redirects &amp; path rewrites</nuxt-link
        >.
      </p>
      <h3>Using webpack</h3>
      <p>
        If you're using webpack, you can tell to serve public assets from the
        injected <code>PUBLIC_URL</code> environment variable.
      </p>
      <pre><code>{{customWebpack}}</code></pre>
      <p>
        For more information on how to build a custom application using server
        side rendering, you can check our
        <nuxt-link to="/docs/examples/custom-hybrid-app" rel="Custom hybrid app"
          >example</nuxt-link
        >
        out.
      </p>
    </section>
  </main>
</template>
<script>
import SkInfoBox from '../../../components/atoms/InfoBox'

const customAppConfig = `app:
- redirects:
    - ext: js,css,ico,png,jpg
      cdn: true`

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
  assetPrefix: process.env.PUBLIC_URL
}`

const customWebpack = `module.exports = {
  output: {
    publicPath: process.env.PUBLIC_URL || "/"
  } 
}`

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

export default {
  layout: 'docs',

  components: {
    SkInfoBox
  },

  data() {
    return {
      customAppConfig,
      nuxtJsConfig,
      nuxtJsStormkitConfig,
      nextJsConfig,
      nextJsStormkitConfig,
      nextJsTargetServerless,
      customWebpack,
      angularServerTs,
      angularWebpack
    }
  },

  head() {
    return {
      title: 'Stormkit - Hybrid applications'
    }
  }
}
</script>
