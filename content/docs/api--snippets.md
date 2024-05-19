---
title: Snippets
description: Documentation on accessing snippets through Stormkit API.
---

# Snippets API

<details>

<summary>
  <span>POST </span><span>/v1/snippets</span>
</summary>

Add snippets.

```typescript
interface Request {
  snippets: []Snippet
}

interface Response {
  snippets: []Snippet
}
```

```bash
# Example

curl -X POST \
     -H 'Authorization: <api_key>' \
     -H 'Content-Type: application/javascript' \
     'https://api.stormkit.io/v1/snippets` \
     -d '{ "snippets": [{ "title": "Snippet title", "content":  "Hello World", "enabled":  true, "prepend":  false, "location": "head", "rules": { "hosts": ["example.org", "*.dev"], "path": "/my-path" } }] }'
```

</details>

<details>

<summary>
  <span>GET </span><span>/v1/snippets</span>
</summary>

Return snippets.

```typescript
interface Response {
  "snippets": []Redirect
}
```

```bash
# Example

curl -X GET \
     -H 'Authorization: <api_key>' \
     -H 'Content-Type: application/javascript' \
     'https://api.stormkit.io/v1/snippets`
```

```json
{
  "snippets": [
    {
      "id": 1501,
      "title": "Snippet title",
      "content": "Hello World",
      "enabled": true,
      "prepend": false,
      "location": "head",
      "rules": {
        "hosts": ["example.org", "*.dev"],
        "path": "/my-path"
      }
    }
  ]
}
```

</details>

<details>

<summary>
  <span>PUT </span><span>/v1/snippets</span>
</summary>

Update the given snippet.

```typescript
interface Request {
  snippet: Snippet
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
     'https://api.stormkit.io/v1/snippets` \
     -d '{ "snippet": { "id": 1501, "title": "New title", "content":  "Hello World", "enabled":  true, "prepend":  false, "location": "head", "rules": { "hosts": ["example.org", "*.dev"], "path": "/my-path" } } }'
```

</details>

<details>

<summary>
  <span>DELETE </span><span>/v1/snippets</span>
</summary>

Delete Snippets with the given ids.

```typescript
interface QueryString {
  ids: []number
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
     'https://api.stormkit.io/v1/snippets?ids=1501,5061`
```

</details>

#### Syntax

```typescript
interface Snippet {
  id: number // The id of the snippet
  title: string // The title to describe what the snippet does. This is used only internally.
  content: string // The content that will be injected to the page
  enabled: boolean // Whether the snippet is enabled or not
  location: 'head' | 'body' // Where to inject the snippet
  prepend: boolean // If true, the snippet will be injected as the first child to the `location`. Otherwise as the last child.
  rules?: {
    hosts?: []string // If provided, the snippet will be injected only for the provided domains.
    path?: string // If provided, the snippet will be injected only for the provided URL path.
  }
}
```

Note: To apply the Snippet to all development endpoints, you can either omit the `rules.hosts` property, or specify `*.dev`.
