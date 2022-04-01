---
title: What's New?
---

Follow the latest developments on Stormkit.

<!--more-->

## April 1st, 2022

It is now possible to overwrite default environment configuration while
using Hooks API to trigger a deployment.

The Hooks API supports both `GET` and `POST` methods.

```
curl -XGET https://api.stormkit.io/hooks/app/:app-id/deploy/:token/:environment-id?publish=true|false&branch=:branch-name
```

```
curl -XPOST https://api.stormkit.io/hooks/app/:app-id/deploy/:token/:environment-id \
    -H 'Content-Type: application/json'
    -d '{"publish": true|false, "branch": ":branch-name"}'
```

You can turn on the deploy triggers from your application's settings page.

## March 24th, 2022

Stormkit now supports integrating with external services to reduce vendor-lock. Read our blog post on [How to Deploy to BunnyCDN](/blog/how-to-deploy-to-bunny-cdn) for more details.
