---
title: Using Redis compatible storage via Http
description:  Redis, a high performance key value store, accelerates data access in real time applications. Explore the seamless integration of Redis with Stormkit through the HTTP API. Easily enhance your Stormkit environment with powerful Redis (key value store) functionality.
---

> **Caution**: The Stormkit Key Value storage API is only available in on premise installations. If you encounter any issues or have feedback, please reach out to our team.

Stormkit provides a simple and convenient way to interact with Redis compatible storage through HTTP. The API allows you to send Redis commands as JSON arrays via a POST request to the endpoint https://<your-domain>/exec.

API is quite trivial, create a API key for your environment and send Redis command as JSON array to https://<your_domain>/exec as post request.

For example;

```curl
curl -X POST -d '["SET", "foo", "bar"]' https://<your-domain>/exec
 -H "Authorization: Bearer <your_environment_token>"
```

Will set foo as key and bar as value. You can browse value's in Key Value section of your environment.

Only commands for following types are available for now,

- Hash
- List
- Set
- String

Blocking commands like BLPOP, BRPOP, BRPOPLPUSH  are not supported for now. Refer to the Redis [documentation](https://redis.io/commands/) for more details on available commands.