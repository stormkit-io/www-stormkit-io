<template>
  <main>
    <h1>Auto deployments</h1>
    <section>
      <p>
        Stormkit can automatically deploy your applications on each commit or on
        each pull request. By default, every application will come with auto
        deployments already enabled. You can also turn this behaviour off from
        the application's settings page.
        <img :src="pngAutoDeployments" alt="Auto Deployments" />
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
            <td class="font-bold">Auto Deploy</td>
            <td>
              When to automatically deploy. You can either auto deploy on commit
              or on pull/merge request. When pull request is chosen, it will
              build once the pull/merge request is opened, it's updated and when
              it's merged. When merged, the target environment configuration
              will be used. When opened or updated, the
              <code>Default Environment</code> configuration will be used.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Default Environment</td>
            <td>
              Every environment is assigned a branch. When auto deployments are
              enabled, the commit will be built using the matching environment's
              configuration. If there is no environment matching for that
              branch, the default environment's configuration will be used.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Match prefix</td>
            <td>
              This is an extra condition to tell Stormkit build only when the
              commit message matches a certain prefix. It's useful if you have
              multiple applications on Stormkit that shares the same repository
              (such as <code>yarn workspaces</code>).
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>
<script>
import pngAutoDeployments from '../../../assets/images/docs/deployments/auto-deployments.png'

export default {
  layout: 'docs',

  data() {
    return {
      pngAutoDeployments
    }
  },

  head() {
    return {
      title: 'Stormkit - Auto deployments'
    }
  }
}
</script>
