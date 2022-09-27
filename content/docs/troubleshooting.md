---
title: Troubleshooting
---

<h1>Troubleshooting</h1>

- [Top-level /index.html missing](#top-level-indexhtml-missing)
- [Repository is inaccessible](#repository-is-inaccessible)

<div id="index-html-missing">

### Top-level /index.html missing

</div>

<section>

This warning occurs when Stormkit is not able to find a top-level `/index.html` file and server side rendering is not detected. This does not necessarily mean that your deployment failed. It just means that your endpoint's root path returns 404. Other uploaded files will still return correctly. 

To view your deployment package, find your deployment from <b>Deployments</b> list, expand the menu and click
on the <b>Manifest</b> button. The <b>CDN Files</b> section contains a list of deployed files. 

If the deployed files are not the correct ones, you can change the output folder by modifying the environment configuration's <b>Output</b> option and re-deploy.

If you need a dynamic application you will need to enable Server Side Rendering. For Nuxt.js, we detect server side rendering automatically. For Next.js, we only support static applications. To enable server side rendering for other applications, your build must generate a `.stormkit/server` folder with a file called <b>server.js</b>. The file must export a method called `handler` like below:

```js
// .stormkit/server/server.js

export const handler = ({ req, res }) => {
    res.write("hello world");
    res.end();
}
```

<p class="mt-4">
You'll probably need a bundler like Vite to bundle your application to <b>.stormkit/server/server.js</b>.

When server side rendering is enabled, all requests not matching a CDN file will be forwarded to serverless
handler. When it is not enabled, Stormkit expects to find a file for the endpoint and returns 404 otherwise.
</p>

</section>

<div id="repo-is-inaccessible">

### Repository is inaccessible

</div>

<section>

This error occurs when Stormkit has no access to the repository. There may be two reasons for this:

- **The repository URL is changed**

1. Visit your application
2. Click on the **Gear** icon and navigate to **Settings** page
3. Change the Repository URL accordingly by pasting the `https` URL
4. If the problem persists, see next step.

- **Credentials are either expired or invalid**

**GitHub**

If you're using a GitHub repository, you'll need to grant access to the Stormkit App. To do so:

1. Visit https://app.stormkit.io
2. Click on **Create new app**
3. Click on **Connect more repositories**
4. Grant access to the repository

Once the popup is closed, navigate to your application and try to re-deploy.

</section>