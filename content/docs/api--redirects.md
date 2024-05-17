---
title: Redirects
description: Documentation on accessing redirects through Stormkit API.
---

# Redirects API

#### `POST /v1/redirects`

Set Environment Level Redirects.

```typescript
interface Request {
  "redirects": []Redirect
}

interface Response {
  "redirects": []Redirect
}
```

#### Example

```bash
curl -X POST \
     -H 'Authorization: <api_key>' \
     -H 'Content-Type: application/javascript' \
     'https://api.stormkit.io/v1/redirects` \
     -d '{ "redirects": [{ "from": "/path", "to": "/new-path" }] }'
```

#### `GET /v1/redirects`

Get Environment Level Redirects.

```typescript
interface Response {
  "redirects": []Redirect
}
```

#### Example

```bash
curl -X GET \
     -H 'Authorization: <api_key>' \
     -H 'Content-Type: application/javascript' \
     'https://api.stormkit.io/v1/redirects`
```

```json
{
  "redirects": [{ "from": "*", "to": "index.html" }]
}
```

#### Syntax

```typescript
interface Redirect {
  from: string
  to: string
  status?: 200 | 301 | 302
  assets?: boolean
  hosts?: string[]
}
```
