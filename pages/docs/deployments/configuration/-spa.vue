<template>
  <div>
    <h2>{{ title }}</h2>
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
  </div>
</template>
<script>
const spaConfig = `app:
- redirects:
    - from: /*
      to: /index.html
      assets: false
`

export default {
  layout: 'docs',

  props: {
    title: { type: String, required: true }
  },

  data() {
    return {
      spaConfig
    }
  }
}
</script>
