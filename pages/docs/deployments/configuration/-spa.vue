<template>
  <div>
    <h2 id="spa">{{ title }}</h2>
    <section>
      <ol>
        <li>Go to your application.</li>
        <li>Click on your environment and then click on <b>Edit</b>.</li>
        <li>Turn off the serverless toggle to enable static websites.</li>
        <li>
          Create a
          <code>stormkit.config.yml</code>
          file at the root level of your repository and write the following
          configuration:
          <pre><code>{{spaConfig}}</code></pre>
        </li>
      </ol>
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
    title: { type: String, required: true },
  },

  data() {
    return {
      spaConfig,
    }
  },
}
</script>
