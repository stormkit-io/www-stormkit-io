<template>
  <main>
    <h1>Outbound Webhooks</h1>
    <section>
      <p>
        You can specify hooks to trigger certain actions upon certain events. To
        do so, head to your <b>Application's Settings</b> page and find the
        <b>Outbound webhooks</b> section.
        <img :src="pngOutboundWebhooks" alt="Outbound Webhooks" />
        Click <b>Add new webhook</b> to open the modal form.
        <img :src="pngCreateOutboundWebhook" alt="Create outbound webhook" />
        Fill out the form and click on <b>Create outbound webhook</b> button.
      </p>
    </section>
    <h2>Special variables</h2>
    <section>
      <p>
        When the <b>Request method</b> is selected as <b>Post</b>, you can
        specify the request payload. This field accepts a raw string that will
        be send to the request URL. You can use the following variables to
        customize the request payload.
      </p>
      <table class="w-full">
        <tr>
          <td class="w-40"><code>$SK_NOW</code></td>
          <td>
            An ISO 8601 formatted time string. The time is computed when sending
            the webhook.
          </td>
        </tr>
        <tr>
          <td class="w-40"><code>$SK_NOW_UNIX</code></td>
          <td>
            The unix timestamp. The time is computed when sending the webhook.
          </td>
        </tr>
        <tr>
          <td><code>$SK_APP_ID</code></td>
          <td>The application id.</td>
        </tr>
        <tr>
          <td><code>$SK_DEPLOYMENT_ID</code></td>
          <td>The deployment id.</td>
        </tr>
        <tr>
          <td><code>$SK_DEPLOYMENT_ENDPOINT</code></td>
          <td>The endpoint to preview the deployment.</td>
        </tr>
        <tr>
          <td><code>$SK_DEPLOYMENT_LOGS_ENDPOINT</code></td>
          <td>
            The endpoint to preview the deployment logs. You will need to be
            authenticated to visit this URL.
          </td>
        </tr>
        <tr>
          <td><code>$SK_DEPLOYMENT_STATUS</code></td>
          <td>
            A string indicating the deployment status. It's either
            <b>success</b> or <b>failed</b>.
          </td>
        </tr>
      </table>
    </section>
    <h2>Testing webhooks</h2>
    <section>
      <p>
        Once a webhook is created you can test it by clicking on the
        <b>...</b> > <b>Trigger sample</b>. The request status and body will be
        displayed in a modal.
      </p>
    </section>
    <h2>Example webhooks</h2>
    <section>
      <h3 id="discord"><a href="#discord">Discord</a></h3>
      <table class="w-full">
        <tr>
          <td class="w-40">Request URL</td>
          <td>The webhook URL of the channel</td>
        </tr>
        <tr>
          <td>Request Headers</td>
          <td>
            <code>Content-Type: application/json</code>
          </td>
        </tr>
        <tr>
          <td>Request Method</td>
          <td>Post</td>
        </tr>
        <tr>
          <td>Request Payload</td>
          <td>
            <code class="whitespace-pre p-2 w-full">{{ discordPayload }}</code>
          </td>
        </tr>
      </table>
      <h3 id="slack"><a href="#slack">Slack</a></h3>
      <table class="w-full">
        <tr>
          <td class="w-40">Request URL</td>
          <td>
            Slack's webhook URL. Check out the
            <a
              href="https://api.slack.com/messaging/webhooks"
              target="_blank"
              rel="noreferrer nofollow"
              >documentation</a
            >
            for more info.
          </td>
        </tr>
        <tr>
          <td>Request Headers</td>
          <td>
            <code>Content-Type: application/json</code>
          </td>
        </tr>
        <tr>
          <td>Request Method</td>
          <td>Post</td>
        </tr>
        <tr>
          <td>Request Payload</td>
          <td>
            <code class="whitespace-pre overflow-x-auto p-2">{{
              slackPayload
            }}</code>
          </td>
        </tr>
      </table>
    </section>
  </main>
</template>
<script>
import pngOutboundWebhooks from '../../../assets/images/docs/deployments/outbound-webhooks.png'
import pngCreateOutboundWebhook from '../../../assets/images/docs/deployments/create-outbound-webhook.png'

const slackPayload = `{
  "as_user": false,
  "username": "Stormkit",
  "icon_url": "https://bit.ly/3qqwmY0",
  "attachments": [
    { 
      "text": "Deployment completed: $SK_DEPLOYMENT_ENDPOINT",
      "color": "#36a64f",
      "footer": "Stormkit Webhooks",
      "ts": "$SK_NOW_UNIX"
    }
  ]
}`

const discordPayload = `{
   "embeds":[
      {
         "title":"Deployment completed",
         "timestamp":"$SK_NOW",
         "url":"https://www.stormkit.io",
         "fields":[
            {
               "name":"App ID",
               "value":"$SK_APP_ID"
            },
            {
               "name":"Status",
               "value":"$SK_DEPLOYMENT_STATUS"
            },
            {
               "name":"Endpoint",
               "value":"$SK_DEPLOYMENT_ENDPOINT"
            },
            {
               "name":"Logs",
               "value":"$SK_DEPLOYMENT_LOGS_ENDPOINT"
            }
         ]
      }
   ]
}`

export default {
  layout: 'docs',

  data() {
    return {
      pngOutboundWebhooks,
      pngCreateOutboundWebhook,
      discordPayload,
      slackPayload,
    }
  },

  head() {
    return {
      title: 'Stormkit - Outbound webhooks',
    }
  },
}
</script>
