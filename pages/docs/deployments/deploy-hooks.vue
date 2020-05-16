<template>
  <main>
    <h1>Deploy hooks</h1>
    <section>
      <p>
        You can specify hooks to trigger certain actions upon certain events. To
        do so, head your <b>Application's Settings</b> page and find the
        <b>Deploy hooks</b> section.
      </p>
    </section>
    <h2>Slack Hooks</h2>
    <section>
      <p>
        You can post notifications to your slack channel. Currently there are
        three triggers: When a deployment has
        <b>started</b>, when a deployment has <b>ended</b> and when a deployment
        has been <b>published</b>. You can specify one, or more at the same
        time. To learn more about creating webhooks, you can read Slack's
        official documentation from
        <a
          href="https://api.slack.com/messaging/webhooks"
          target="_blank"
          rel="noopener noreferrer"
        >
          here </a
        >.
        <img :src="pngSlackHooks" alt="Slack Hooks" />
      </p>
    </section>
  </main>
</template>
<script>
import pngSlackHooks from '../../../assets/images/docs/deployments/slack-hooks.png'

export default {
  layout: 'docs',

  data() {
    return {
      pngSlackHooks
    }
  },

  head() {
    return {
      title: 'Stormkit - Deployment hooks'
    }
  }
}
</script>
