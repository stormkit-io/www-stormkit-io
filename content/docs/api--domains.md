---
title: Domains API
description: Documentation on handling domains through Stormkit API.
---

# Domains API

<details>

<summary>
  <span>POST </span><span>/v1/domains</span>
</summary>

Add a domain.

```typescript
interface Request {
  domain: string
}

interface Response {
  domainId: string
  token: string
}
```

```bash
# Example

curl -X POST \
     -H 'Authorization: <api_key>' \
     -H 'Content-Type: application/javascript' \
     'https://api.stormkit.io/v1/domains' \
     -d '{ "domain": "example.org" }'
```

```json
{
  "domainId": "18914",
  "token": "AiX8xKhrGvsnwTTvT7yoxUFlTYzjn3bm"
}
```

Successful responses return the newly created domain id and a token to start the verification process.

</details>

<details>

<summary>
  <span>GET </span><span>/v1/domains</span>
</summary>

Return domains attached to an environment.

```typescript
interface QueryString {
  afterId?: string
  verified?: "true"
}

interface Response {
  domains: []Domain
  pagination: Pagination
}
```

```bash
# Example

curl -X GET \
     -H 'Authorization: <api_key>' \
     -H 'Content-Type: application/javascript' \
     'https://api.stormkit.io/v1/domains'
```

```json
{
  "domains": [
    {
      "id": "18914",
      "domainName": "exmaple.org",
      "verified": false,
      "token": "AiX8xKhrGvsnwTTvT7yoxUFlTYzjn3bm"
    }
  ],
  "pagination": {
    "hasNextPage": false
  }
}
```

To filter domains by verification status, you can use the `verified` querystring parameter.

To paginate results, you can specify the `afterId` querystring parameter. This value is returned in the first `GET` request.

</details>

<details>

<summary>
  <span>DELETE </span><span>/v1/domains</span>
</summary>

Delete a Domain by it's id.

```typescript
interface QueryString {
  id: string
}

interface Response {
  ok: boolean
}
```

```bash
# Example

curl -X PUT \
     -H 'Authorization: <api_key>' \
     -H 'Content-Type: application/javascript' \
     'https://api.stormkit.io/v1/domains?id=1501'
```

</details>

#### Syntax

```typescript
interface Domain {
  id: string
  domainName: string
  verified: boolean
  token: string
}

interface Pagination {
  hasNextPage: boolean
  afterId?: string
}
```

| Property   | Definition                                                                           |
| ---------- | ------------------------------------------------------------------------------------ |
| id         | The unique id of the domain.                                                         |
| domainName | The domain name.                                                                     |
| verified   | Whether the domain is verified or not. For self-hosted users, this is always `true`. |
| token      | A token used to create TXT record to verify a domain.                                |
