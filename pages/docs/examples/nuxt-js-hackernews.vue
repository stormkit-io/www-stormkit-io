<template>
  <main>
    <h1>Nuxt.js Hacker News implementation</h1>
    <section>
      <p>
        This is a HackerNews clone built with Nuxt.js and hosted on Stormkit.
        You can check the repository here:
        <a
          href="https://github.com/stormkit-dev/hackernews-nuxt"
          rel="noreferrer noopener"
          target="_blank"
          >https://github.com/stormkit-dev/hackernews-nuxt</a
        >.
      </p>
    </section>
    <section>
      <p>
        It contains two branches: <code>master</code> and <code>spa</code>. The
        first one is a universal app which can be viewed here:
        <a
          href="https://hn-nuxt.stormkit.dev/news"
          rel="noreferrer noopener"
          target="_blank"
          >https://hn-nuxt.stormkit.dev/news</a
        >
        and the second one is the static page version which can be viewed here:
        <a
          href="https://hn-nuxt--spa.stormkit.dev/news"
          rel="noreferrer noopener"
          target="_blank"
          >https://hn-nuxt--spa.stormkit.dev/news</a
        >. The subdomains are configured from the
        <b>application's settings</b> page. The display name you choose there
        will be used in the subdomain and every environment other than the
        <b>production</b> will be appended in
        <b>--[environment-name]</b> format. If you have
        <b>Auto Publish</b> enabled, these environments will always point to the
        latest successful deployment - otherwise to the manually published
        deployment.
      </p>
    </section>
    <section>
      <p>
        Let's check the <code>stormkit.config.yml</code> in order to understand
        better how Stormkit works. The file contains comments to make it easier
        to follow.
      </p>
      <pre><code>{{yaml}}</code></pre>
      <p>
        If you fork this repository and create a new app, Stormkit will read the
        <code>stormkit.config.yml</code> file and prepare the environments for
        you. However, bear in mind that for the <code>spa</code> environment to
        work, you may need to create an spa branch in the forked repository.
      </p>
    </section>
  </main>
</template>
<script>
const yaml = `app:
  - redirects:      
      # Universal config - rewrite all /_nuxt/ requests to / and 
      # serve them from the CDN. Apply this rule only for the 
      # given host.
      - from: /_nuxt/*                  
        to: /
        replace: true                   
        cdn: true                       
        host: hn-nuxt.stormkit.dev
     
     # SPA config - redirect all files except assets to index.html
     # Keep in mind that the order matters, so the wildcard should 
     # be placed at the end.
      - from: /*                        
        to: /index.html
        assets: false
        host: hn-nuxt--spa.stormkit.dev
        
    # This is the environment configuration.
    # You can create environments from this file or from the UI.
    envs:
      - name: production
        branch: master
        publish: true           # Publish every deployment
        ssr: true               # Enable serverless
        cmd: yarn build
        vars:
          NODE_ENV: production

      - name: spa
        branch: spa
        publish: true           # Publish every deployment
        cmd: yarn build-spa
        vars:
          NODE_ENV: production
`

export default {
  layout: 'docs',
  data() {
    return {
      yaml
    }
  }
}
</script>
