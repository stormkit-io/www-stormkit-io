---
sidebar_position: 2
---

# HackerNews clone with Nuxt.js

This is a HackerNews clone built with Nuxt.js and hosted on Stormkit. You can check the repository here: https://github.com/stormkit-dev/hackernews-nuxt.

It contains two branches: `master` and `spa`. The first one is a universal app which can be viewed here: https://hn-nuxt.stormkit.dev/news and the second one is the static page version which can be viewed here: https://hn-nuxt--spa.stormkit.dev/news. The subdomains are configured from the application's settings page. The display name you choose there will be used in the subdomain and every environment other than the production will be appended in --[environment-name] format. If you have Auto Publish enabled, these environments will always point to the latest successful deployment - otherwise to the manually published deployment.

Let's check the `stormkit.config.yml` in order to understand better how Stormkit works. The file contains comments to make it easier to follow.

```yml  title="stormkit.config.yml"
app:
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
```

If you fork this repository and create a new app, Stormkit will read the `stormkit.config.yml` file and prepare the environments for you. However, bear in mind that for the spa environment to work, you may need to create an spa branch in the forked repository.
