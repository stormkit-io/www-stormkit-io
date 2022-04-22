---
title: Deployment configuration
---

# Configuration

<section>

Each [environment](/docs/features/multiple-environments) in Stormkit has a configuration which is divided into two sections. The first section is the environment configuration, where you can provide the name of the environment, the branch it points to and whether auto publish is enabled or not.

<sk-article-image 
    src="docs/deployments/env-config.png" 
    alt="Environment config" 
    class="bg-blue-50 mt-8"></sk-article-image>

| Setting          | Description |
| ---------------- | ----------- |
| **Environment name** | The name of the environment. Each application can have as many environments as needed. You cannot reuse the same environment name in a given application. |
| **Branch**           | Every environment is assigned a branch. When auto deployments are enabled, the commit will be built using the matching environment's configuration. If there is no environment matching for that branch, the default environment's configuration will be used. |
| **Auto Publish**     | When enabled, successfull deployments will be automatically published. When a deployment is published, the domain will point to that deployment. |

<p>

</section>

## Build Configuration

<section>

The second section is the build configuration, which will be used to build and deploy your application. Stormkit has a built-in support for the following frameworks: <code>Nuxt.js</code>, <code>Next.js</code>, <code>Angular</code> and <code>Nest.js</code>. We'll understand your <code>publish</code> folder directly from the framework configuration file.

<sk-article-image 
    src="docs/deployments/env-framework-build-config.png" 
    alt="Environment build config" 
    class="bg-blue-50 mt-8"></sk-article-image>

</p>

<p>

If any other framework is used or no framework is used at all, the build configuration will display two additional fields:

<sk-article-image
    src="docs/deployments/env-build-config.png"
    alt="Environment build config"
    class="bg-blue-50 mt-8"></sk-article-image>

</p>

| Setting                   | Description |
| ------------------------- | ----------- |
| **Publish folder**        | The publish folder will be uploaded to our CDN. This folder is expected to have an <code>index.html</code> at the top level. |
| **Build command**         | The build command to execute. You can chain multiple commands with the logical and (<code>&amp;&amp;</code>) operator. You can use bash commands as well. |
| **Environment variables** | The environment variables that will be injected during build time. Variable names matching following regex will be obfuscated <code>/secret\|\_key\|password/i</code>. |

</section>
