<template>
  <main>
    <h1 id="configuration">Configuration</h1>
    <section>
      <p>
        Each
        <nuxt-link to="/docs/features/multiple-environments"
          >environment</nuxt-link
        >
        in Stormkit has a configuration which is divided into two sections. The
        first section is the environment configuration, where you can provide
        the name of the environment, the branch it points to and whether auto
        publish is enabled or not.
        <img :src="pngEnvConfig" alt="Environment config" />
      </p>
      <table>
        <thead>
          <tr>
            <th width="35%">Setting</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold">Environment name</td>
            <td>
              The name of the environment. Each application can have as many
              environments as needed. You cannot reuse the same environment name
              in a given application.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Branch</td>
            <td>
              Every environment is assigned a branch. When auto deployments are
              enabled, the commit will be built using the matching environment's
              configuration. If there is no environment matching for that
              branch, the default environment's configuration will be used.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Auto publish</td>
            <td>
              When enabled, successfull deployments will be automatically
              published. When a deployment is published, the domain will point
              to that deployment.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The second section is regarding the build configuration. When building
        and deploying an application, these configuration settings will be used.
        Stormkit has a built-in support for the following frameworks:
        <code>Nuxt.js</code>, <code>Next.js</code>, <code>Angular</code> and
        <code>Nest.js</code>. This built-in support allows you to toggle
        Serverless or Static mode with a switch under your Environment
        configuration. We'll understand your <code>publish</code> folder
        directly from the framework configuration file.
        <img :src="pngEnvFrameworkBuildConfig" alt="Framework build config" />
        If any other framework is used or no framework is used at all, the build
        configuration will display two additional fields:
        <img :src="pngEnvBuildConfig" alt="Environment build config" />
      </p>
      <table>
        <thead>
          <tr>
            <th width="35%">Setting</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold">Server file</td>
            <td>
              This is required only for hybrid applications. It points the entry
              file for the server side application. Stormkit will reuse the
              webpack configuration of the client side, make adjustments to it,
              and wrap this file with some additional logic to prepare it for
              the serverless environment. Therefore, this file is expected to
              export a function. More information
              <nuxt-link to="/docs/deployments#hybrid-applications"
                >here</nuxt-link
              >.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Publish folder</td>
            <td>
              The publish folder will be uploaded to our CDN. This folder is
              expected to have an <code>index.html</code> at the top level.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Build command</td>
            <td>
              The build command to execute. You can chain multiple commands with
              the logical and (<code>&amp;&amp;</code>) operator. You can use
              bash commands as well.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Environment variables</td>
            <td>
              The environment variables that will be injected during build time.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>
<script>
import pngEnvFrameworkBuildConfig from '~/assets/images/docs/deployments/env-framework-build-config.png'
import pngEnvBuildConfig from '~/assets/images/docs/deployments/env-build-config.png'
import pngEnvConfig from '~/assets/images/docs/deployments/env-config.png'

export default {
  layout: 'docs',

  data() {
    return {
      pngEnvFrameworkBuildConfig,
      pngEnvBuildConfig,
      pngEnvConfig,
    }
  },

  head() {
    return {
      title: 'Stormkit - Deployment configuration',
    }
  },
}
</script>
