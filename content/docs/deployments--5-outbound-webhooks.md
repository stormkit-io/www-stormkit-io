---
title: Outbound Webhooks
description: Notify 3rd party applications after each deployment with Stormkit.
---

# Outbound Webhooks

<section>

With outbound webhooks, you can conveniently trigger various actions when an event occurs, such as disabling cache or initiating workflows like notifications. This powerful feature enhances the flexibility and automation of your deployments.

To enable users to define outbound webhooks upon deployment completion, follow these simple steps:

- Navigate to your Application's Settings page and locate the Outbound webhooks section.

- Click on `Add new webhook` to open the modal form.

- Fill out the required information in the form and proceed by clicking the `Create outbound` webhook button.


</section>

## Special variables for payload

<section>

When the `Request method` is selected as `Post`, you can specify the request payload. This field accepts a raw string that will be send to the request URL. You can use the following variables to customize the request payload.

| Variable                  | Description |
| ------------------------- |  ---------- |
| `$SK_NOW`                 | An ISO 8601 formatted time string. The time is computed when sending the webhook. |
| `$SK_NOW_UNIX`            | The unix timestamp. The time is computed when sending the webhook. |
| `$SK_APP_ID`              | The application id. |
| `$SK_ENVIRONMENT`         | The environment name. When triggering an outbound webhook on publish, this is the name of the environment that the deployment is published to. Otherwise, it is the name of the environment which the build configuration is taken from. |
| `$SK_DEPLOYMENT_ID`       | The deployment id. |
| `$SK_DEPLOYMENT_ENDPOINT` | The endpoint to preview the deployment. |
| `$SK_DEPLOYMENT_LOGS_ENDPOINT` | The endpoint to preview the deployment logs. You will need to be authenticated to visit this URL. |
| `$SK_DEPLOYMENT_STATUS` | A string indicating the deployment status. It's either success or failed. |

</section>
