---
title: What's New?
---

Follow the latest developments on Stormkit.

<!--more-->

## April 10th, 2022

Free users can now deploy up to 15 times per month.

## April 9th, 2022

Stormkit users now have more flexibility on what branches to deploy automatically. To use this new
feature, visit your application's page and click on **Edit configuration** on the environment that you would like to modify and find the **Auto Deploy Branches** field to instruct Stormkit for which branches
auto deployments are turned on. The field accepts a `regexp` pattern. Here are some examples:

```
^dependabot/.*             # Deploy only branches that start with dependabot/
^(?!dependabot|renovate).* # Deploy all branches that do not start with dependabot or renovate
release-*                  # Deploy all branches that start with release-
```

The logic to determine whether a branch should be automatically deployed or not is depicted
in the following diagram:

<sk-article-image 
    src="blog/whats-new/auto-deployment-flow-transparent.svg"
    alt="Auto deployment flow"
    class="bg-white mt-8">
</sk-article-image>

### Other changes

- `Commit prefix` configuration option located in the application's settings page is removed
- Providing `--skip-deploy` in a commit message is no longer considered

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
