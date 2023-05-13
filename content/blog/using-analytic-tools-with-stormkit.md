---
title: Tracking user data using Stormkit and Plausible
description: Learn how to track user data using Stormkit and Plausible without deploying your application. Inject snippets instantly with this powerful functionality.
date: 2022-04-09
---

Easily inject snippets into your application without deploying your application.

<!--more-->

## Snippets

With the help of our **Snippets** functionality you can inject any code into your application without deploying it. This is very powerful as you can turn on and off integrations instantly.

## Plausible and Stormkit

For the purpose of this blog post, we will be using [Plausible](https://plausible.io) as an example but this
functionality can be used with any third party tool. Plausible is an open source analytic platform, you can either host it yourself or use their cloud offering. Let's get started by adding our endpoint to Plausible:

<div class="img-wrapper">
  <img
    src="/assets/blog/analytics/plausible-setup.png" 
    alt="Plausible" />
</div>

We're going to use https://paintersheer-foihe8.stormkit.dev/ as an example.
After providing the endpoint to Plasuible, it will generate a script similar to the one below:

```javascript
<script
  defer
  data-domain="paintersheer-foihe8.stormkit.dev"
  src="https://plausible.io/js/plausible.js"
></script>
```

Now head to your **App** on Stormkit, select the **Environment** which the snippet will be injected and click on **Snippets** from the environment menu on the right side of the page.

<div class="img-wrapper"> 
  <img src="/assets/blog/analytics/snippet-overall.png" alt="Snippets" />
</div>

Select add snippet and paste the code provided by Plausible.

<div class="img-wrapper"> 
  <img src="/assets/blog/analytics/add-snippet.png" alt="Add snippet" />
</div>

Once you visit your web site you will notice in [Plausible](https://plausible.io) dashboard that visitor data is displayed.

## Conclusion

In this example, we added analytic capabilities to our website without altering the source code. The snippets functionality allows us to enable or disable injected code without any deployment.

Hope you found this post useful!
