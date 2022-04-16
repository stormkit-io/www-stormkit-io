---
title: Auto Deployments
---

# Auto deployments

<section>

Stormkit can automatically deploy your applications on each commit or on each pull request. By default, every application will come with auto deployments not enabled. You can enable this option from the application's settings page.

</section>

| Setting                 |                                                                                                                                                                          Description                                                                                                                                                                          |
| ----------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Auto Deploy**         | When to automatically deploy. You can either auto deploy on commit or on pull/merge request. When pull request is chosen, it will build once the pull/merge request is opened, it's updated and when it's merged. When merged, the target environment configuration will be used. When opened or updated, the Default Environment configuration will be used. |
| **Default Environment** |                                                Every environment is assigned a branch. When auto deployments are enabled, the commit will be built using the matching environment's configuration. If there is no environment matching for that branch, the default environment's configuration will be used.                                                 |
