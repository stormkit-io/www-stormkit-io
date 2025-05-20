---
title: 'Self-Hosting with Stormkit: Authentication Setup'
description: Learn how to configure authentication for your self-hosted Stormkit instance. Set up admin accounts and integrate with GitHub, GitLab, or BitBucket for seamless repository management.
---

# Authentication

<section id="authentication">

Authentication is a critical part of your self-hosted Stormkit instance. During the initial setup, you will create an **admin account** that has full access to the admin interface and can configure instance-wide options.

The admin account can:

- Access the admin interface.
- Configure global settings for your Stormkit instance.
- Import public repositories or create bare apps.

However, to import **private repositories**, you must configure at least one of the following authentication methods:

- **GitHub**
- **GitLab**
- **BitBucket**

## Setting Up oAuth Authentication

To enable authentication with one of these providers, you need to create an oAuth application and provide the required environment variables. Follow these steps:

### 1. Create an oAuth Application

Visit the developer portal of your chosen provider and create an oAuth application:

- [GitHub Developer Settings](https://github.com/settings/apps)
- [GitLab Applications](https://gitlab.com/-/profile/applications)
- [BitBucket App Management](https://bitbucket.org/account/settings/app-passwords/)

### 2. Provide Environment Variables

Once the oAuth application is created, you will receive credentials such as `Client ID` and `Client Secret`. Add these credentials to your environment variables. Refer to the [docker-compose.yaml](https://github.com/stormkit-io/bin/blob/main/docker-compose.yaml) file for a complete list of required variables and their descriptions.

### 3. Restart your Stormkit Instance

For the environment variables to take effect, make sure to restart Stormkit. For an environment using docker compose, the command to restart the services is:

```bash
docker compose down workerserver hosting && docker compose up workerserver hosting -d
```

</section>
