---
title: System environment variables
description: Predefined system environment variables that are injected during deployments.
---

# System environment variables

Stormkit injects several environment variables available to your deployment.

<section>

| Variable         | Description  |
| ---------------- | ------------ |
| `SK_APP_ID`      | The application ID which is currently being deployed. <br/> Example: `3289604702` |
| `SK_BRANCH_NAME` | The branch name which is currently being deployed. <br /> Example: `main` |
| `SK_ENV`         | The environment name that is currently being used as a configuration. <br /> Example: `staging` |
| `SK_ENV_ID`      | The environment ID that is currently being used as a configuration. <br /> Example: `1406306010105` |
| `SK_ENV_URL`     | The URL of the environment. <br /> Example: `my-app--staging.stormkit.dev` |
| `SK_COMMIT_SHA`  | The long-format commit SHA. <br /> Example: `1d804406ca177329541ed1b6468d8da794aab109` |
| `STORMKIT`       | This indicates that we're on a Stormkit environment. The value is always `true` (string). |

</section>

