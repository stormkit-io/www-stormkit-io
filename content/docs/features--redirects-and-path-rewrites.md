---
title: Redirects and path rewrites
---

# Redirects and Path Rewrites

<section>
Stormkit is able to handle the path rewrites and redirects on the load balancer level. In order to make use of this feature, create a `redirects.json` file at root level of your repository. This file will be parsed on each deployment, hence if you change this file previous deployments won't be affected. The syntax is as follows:

```json
[
  {
    "from": "string",   // (required): The path. Supports regexp syntax.
    "to": "string",     // (required): The destination path.
    "status": "number", // (optional): The HTTP Status Code for redirect. Default is empty.
    "assets": "boolean" // (optional): Whether to apply the redirect/rewrite to any static file that is not an html file. Default is false.
  }
]
```

</section>

## Redirect non-www to www

<section>

```json
[
  {
    "from": "stormkit.io",
    "to": "www.stormkit.io", 
    "status": 301
  }
]
```

</section>

## Path rewrites

<section>

If you omit the `status` property, Stormkit will not redirect the request but will simply rewrite the path.

```json
[
  {
    "from": "/my-path/*",
    "to": "/my-new-path/$1", 
  }
]
```

In this case, all requests coming to `my-path` will be served as if they were coming to `my-new-path`.

</section>

## SPA config

<section>

```json
[
  {
    "from": "/*",
    "to": "/index.html", 
    "assets": false,
  }
]
```

The above example will rewrite all requests to `index.html`. By setting `assets` false This is useful for single page applications.

</section>

## Regexp

<section>

```json
[
  {
    "from": "/documentation/*/page/*",
    "to": "/docs/$1/$2"
  },
  {
    "from": "/documentation$",
    "to": "/docs"
  }
]
```

You can use `regexp` syntax for redirects. The example above creates two redirects.

1. The first one will redirect `/documentation/welcome/page/getting-started` to `/docs/welcome/getting-started`.
2. The second will redirect `/documentation` to `/docs`. 

Note the `$amp;` sign at the end of the string. That sign simply tells to redirect only the path `/documentation` and not anything that contains `/documentation`. 

</section>
