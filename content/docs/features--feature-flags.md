---
title: Feature flags
description: Inject and control feature flags into your applications.
---

# Feature flags

<section>

Stormkit provides a method to inject feature flags into your client-side application and control them through its user interface. Feature flag values are updated on the spot, allowing users to control features without needing deployment.

To create a feature flag:

1. Go to **Your Application**
2. Click on **Feature Flags** (the flag icon) from the left navigation bar
3. Click on **New feature flag**
4. Specify a name and click **Create**

To use the feature flags:

1. Enable the feature flag
2. In your client-side application, access them through the `window.sk.features` globally available object.

</section>

## Using feature flags locally

<section>

There are two methods to inject the `window.sk.features` object into local environments. The first one is through fetching the feature flags from Stormkit API:

To access feature flags from other clients, use the Stormkit API by making a `GET` request to `https://api.stormkit.io/apps/<app-id>/envs/<env-id>/flags`. Replace `<app-id>` and `<env-id>` with your **App ID* and **Environment ID**.

Example:

```bash
curl -X GET https://api.stormkit.io/apps/592128846360/envs/483571891194/flags
```

Output:

```json
[
    { "flagName": "example_feature_flag", "flagValue":true } 
]
```

<section>