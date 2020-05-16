<template>
  <main>
    <h1>Multiple environments</h1>
    <section>
      <p>
        With Stormkit you can create multiple environments per application. Each
        environment will point to a branch and when that branch is updated
        Stormkit will automatically deploy it (given you have
        <nuxt-link to="/docs/deployment/auto-deployments"
          >Auto Deployments</nuxt-link
        >
        enabled). You can also publish multiple deployments at the same time.
        Check
        <nuxt-link to="/docs/features/staged-rollouts"
          >Staged Rollouts</nuxt-link
        >
        for more information on that.
      </p>
    </section>
    <h2>Default environment</h2>
    <section>
      By default, each application comes with a production environment already
      set. You'll need to configure it to deploy it successfully. The production
      environment cannot be deleted or renamed. However, you can change the
      branch it points. Any branch that does not match an environment's branch
      (a feature branch) will be deployed with the default environment's
      configuration. You can change this behaviour by visiting the
      <b>Application's settings</b> page and modifying the
      <b>Default environment</b> dropdown under the
      <b>Auto deployments</b> section. That will tell Stormkit to build new
      feature branch deployments with that environment's configuration.
      <img :src="pngEnvDefault" alt="Default environment" />
    </section>
    <h2>Creating an environment</h2>
    <section>
      In order to create a new environment, select your application. You'll be
      directly brought to a screen where you see a list of environments. On top
      right, you'll see an <code>Add Environment</code>. Click on that and
      <nuxt-link to="/docs/deployments/configuration">configure</nuxt-link> your
      environment.
      <img :src="pngEnvScreen" alt="Environment screen" />
    </section>
    <h2>Deleting an environment</h2>
    <section>
      In order to delete an environment, you'll have to navigate to the
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      page and hit the <code>Delete environment</code> button at the bottom.
      Deleting an environment will also remove all associated deployments.
      <img :src="pngEnvDelete" alt="Environment delete" />
      Please bear in mind that you cannot delete
      <code>Production</code> environments as they are required by design.
    </section>
  </main>
</template>
<script>
import pngEnvScreen from '../../../assets/images/docs/features/env-screen.png'
import pngEnvDelete from '../../../assets/images/docs/features/env-delete.png'
import pngEnvDefault from '../../../assets/images/docs/deployments/auto-deployments.png'

export default {
  layout: 'docs',

  data() {
    return {
      pngEnvScreen,
      pngEnvDelete,
      pngEnvDefault
    }
  },

  head() {
    return {
      title: 'Stormkit - Environments'
    }
  }
}
</script>
