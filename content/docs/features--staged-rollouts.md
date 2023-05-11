---
title: Staged rollouts
---

# Staged Rollouts

<section>
You can publish your deployments gradually with Stormkit. This will allow testing your application with a small percentage of users and then gradually increase the traffic as you get more confident.

If this is your first deployment, you will only see a button to proceed. Otherwise, you will see previously deployed versions and decide with how much traffic you'd like your new deployment to be published.

</section>

## How it works

<section>
Behind the scenes, when Stormkit has more deployments to publish, it decides which one to display based on the given percentages. Once a version is displayed, the user will keep seeing the same version until it is unpublished or the user deletes their cookies. Stormkit places a cookie named <code>sk_variant</code> with the id of the displayed deployment. If you need to manually change the version, simply overwrite the cookie value with the id of the other deployment. You can find the id in the address bar when you click on a deployment. Keep in mind that this deployment needs to be published, otherwise Stormkit won't recognise the cookie value and will display one of the published versions.

As this operation is completely done on the load-balancer level the user won't see any flicker effect which client-side split testing libraries usually cause.

</section>
