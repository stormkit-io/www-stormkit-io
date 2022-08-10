---
title: What's New?
---

Follow the latest developments on Stormkit.

<!--more-->

## August 10th, 2022

Stormkit now automatically detects `pnpm` projects and build them using `pnpm`.

## August 8th, 2022

We now display the commit sha of the deployment. Clicking on the takes you to the diff page to view 
the changes.

<sk-article-image 
    src="blog/whats-new/feat-commit-sha.png"
    alt="Commit SHA"
    class="bg-white mt-8">
</sk-article-image>


## August 6th, 2022

Stormkit now supports building APIs using Node.js / Typescript 🎉. [Learn more](/docs/features/api).

## July 28th, 2022

Stormkit now injects the git commit sha as an environment variable during build time. This is useful to track
changes with third party tools. For instance by providing the commit sha to Sentry, you can track after which
specific commit the errors started to occur. 

<sk-article-image 
    src="blog/whats-new/git-commit.png"
    alt="Injected Commit SHA"
    class="bg-white mt-8">
</sk-article-image>

## June 30th, 2022

https://github.com/stormkit-io/serverless is now open source. With serverless you can make  your nodejs app run on aws lambda with minimal efford

## June 9th, 2022

It's now possible to use Node.js 16 runtime. To change your Node version, go to your Application Settings
and change the selected Runtime.

## May 18th, 2022

Better support for next.js serverless projects. The bundle size is decreased and a bug has been fixed.

**Important** When deploying next.js serverless applications, do not forget to specify `target: "serverless"`
in `next.config.js` file. 

## April 18th, 2022

- The Serverless toggle has been deprecated. Stormkit now understands whether your application is serverless
or not from the artifacts.

- We have removed the limit on the number of applications you can host on Stormkit based on your tier. It's
all unlimited now.

## April 17th, 2022

It is now possible to view usage data by visiting **App** > **Usage**.

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
