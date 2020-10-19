<template>
  <main>
    <h1>Redirects and Path Rewrites</h1>
    <section>
      <p>
        Stormkit is able to handle the path rewrites and redirects on the load
        balancer level. In order to make use of this feature, create a
        <code>stormkit.config.yml</code> file at root level of your repository.
        This file will be parsed on each deployment, hence if you change this
        file previous deployments won't be affected. The syntax is as follows:
      </p>
      <pre><code>{{syntax}}</code></pre>
    </section>
    <h2>Syntax</h2>
    <section>
      <table>
        <tbody>
          <tr>
            <td><b>From</b></td>
            <td>
              The URL or path to be rewritten/redirected. It accepts a pattern
              string.
              <br />
              <br />
              '*' matches any sequence of non-Separator characters
            </td>
          </tr>
          <tr>
            <td><b>To</b></td>
            <td>The destination URL or path.</td>
          </tr>
          <tr>
            <td><b>Ext</b></td>
            <td>
              A list of extensions to match. If provided, the from clause will
              be ignored and only cdn clause will be interpreted. This property
              expects a string of extensions, separated by a comma.
            </td>
          </tr>
          <tr>
            <td><b>Status</b></td>
            <td>
              The redirect status. When 'From' is a relative path, it defaults
              to an empty value and when it's empty the path will be rewritten.
              When 'From' is a host name, it defaults to 302.
            </td>
          </tr>
          <tr>
            <td><b>Assets</b></td>
            <td>
              Specifies if the assets should also be considered for this
              rewrite/redirect. If true, the assets won't be redirected. Any
              file that has not an .html extension and has not an empty mime
              type is considered as a static asset. This variable is used only
              when 'From' is a path and not an absolute URL.
            </td>
          </tr>
          <tr>
            <td><b>Cdn</b></td>
            <td>
              Tells Stormkit that this request should be served from the CDN and
              not from the lambdas.
            </td>
          </tr>
          <tr>
            <td><b>Replace</b></td>
            <td>
              Specifies whether a string replace should be used while
              redirecting. When used with the `status` field, it will replace
              the `from` value with the `to` value.
            </td>
          </tr>
          <tr>
            <td><b>Host</b></td>
            <td>Restricts the redirect rule to the specified host name.</td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2>Redirect non-www to www</h2>
    <section>
      <pre><code>{{ nonWwwToWww }}</code></pre>
      <p>
        With <code>replace: true</code> we basically tell Stormkit to keep the
        URL. For instance when it's <code>true</code>,
        <code>https://stormkit.io/docs</code> will be redirected to
        <code>https://www.stormkit.io/docs</code>, when it's
        <code>false</code> it will be redirected to
        <code>https://www.stormkit.io</code>.
      </p>
    </section>
    <h2>Path rewrites</h2>
    <section>
      <pre><code>{{ pathRewrite }}</code></pre>
      <p>
        You can rewrite paths by using the combination of
        <code>*</code> in the <code>from</code> setting and
        <code>replace</code> being set to <code>true</code>. This will tell
        Stormkit to replace anything that matches the 'from' statement with the
        'to' statement, and keep the rest of the url.
        <br />
        <br />
        <b>Examples with the above settings:</b>
      </p>
      <table class="w-full">
        <thead>
          <tr>
            <th><b>From</b></th>
            <th><b>To</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/index.html</td>
            <td>Uneffected</td>
          </tr>
          <tr>
            <td>/dist/index.html?q=1</td>
            <td>/my-other-dist/index.html?q=1</td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2>SPA config</h2>
    <section>
      <pre><code>{{ spaConfig }}</code></pre>
      <p>
        The above example will rewrite all requests to
        <code>index.html</code>. It applies only to CDN requests since
        <code>cdn</code> is set <code>true</code>. This is useful for single
        page applications.
      </p>
    </section>
    <h2>Serve from the CDN</h2>
    <section>
      <pre><code>{{ cdnRewrite }}</code></pre>
      <p>
        By default Stormkit provides an endpoint to serve files from the CDN.
        Sometimes however we need to serve files from the same domain. If you're
        using an isomorphic application, requests to the same domain will tell
        Stormkit to forward the request to the lambda function. Luckily, by
        setting the <code>cdn</code> config <code>true</code> we tell Stormkit
        to serve the files from the CDN.
        <br />
        <br />
        If you don't want to match files one by one, you can also use the ext
        property. This will tell Stormkit to match only given extensions and
        load them from the CDN:
      </p>
      <pre><code>{{ redirectAssets }}</code></pre>
    </section>
    <h2>Host matching</h2>
    <section>
      <pre><code>{{ hostSettings }}</code></pre>
      <p>
        When the <code>host</code> parameter is specified, Stormkit will check
        that the request host matches the parameter value. This is useful when
        you have a monorepo with multiple apps hosted and you want to make sure
        that the redirect applies only to given hosts.
      </p>
    </section>
  </main>
</template>
<script>
const syntax = `app:
- redirects:
    - from: <string>
      to: <string>
      ext: <string>
      status: <number>
      replace: <bool>
      assets: <bool>
      static: <bool>
      host: <string>
`

const nonWwwToWww = `app:
- redirects:
    - from: stormkit.io
      to: www.stormkit.io
      status: 301
      replace: true
`

const spaConfig = `app:
- redirects:
    - from: /*
      to: /index.html
      assets: false
`

const cdnRewrite = `app:
- redirects:
    - from: /favicon.ico
      to: /favicon.ico
      cdn: true
`

const pathRewrite = `app:
- redirects:
    - from: /dist/*
      to: /my-other-dist/
      replace: true
`
const hostSettings = `app:
- redirects:
    - from: /dist/*
      to: /my-other-dist/
      replace: true
      host: example.org
`

const redirectAssets = `app:
- redirects:
    - ext: js,css,png # Separate list of extensions by comma
      cdn: true # Tell to load assets from CDN
`

export default {
  layout: 'docs',

  data() {
    return {
      redirectAssets,
      hostSettings,
      pathRewrite,
      cdnRewrite,
      spaConfig,
      nonWwwToWww,
      syntax
    }
  },

  head() {
    return {
      title: 'Stormkit - Redirects and path rewrite'
    }
  }
}
</script>
