---
title: Redirects and path rewrites
---

# Redirects and Path Rewrites

<section>
Stormkit is able to handle the path rewrites and redirects on the load balancer level. In order to make use of this feature, create a `stormkit.config.yml` file at root level of your repository. This file will be parsed on each deployment, hence if you change this file previous deployments won't be affected. The syntax is as follows:

```yaml
app:
  - redirects:
      - from: <string>
        to: <string>
        ext: <string>
        status: <number>
        replace: <bool>
        assets: <bool>
        static: <bool>
        host: <string>
```

</section>

## Syntax

<section>

| Key     | Description                                                                                                                                                                                                                                                                                              |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| From    | The URL or path to be rewritten/redirected. It accepts a pattern string. '\*' matches any sequence of non-Separator characters                                                                                                                                                                           |
| To      | The destination URL or path.                                                                                                                                                                                                                                                                             |
| Ext     | A list of extensions to match. If provided, the from clause will be ignored and only cdn clause will be interpreted. This property expects a string of extensions, separated by a comma.                                                                                                                 |
| Status  | The redirect status. When 'From' is a relative path, it defaults to an empty value and when it's empty the path will be rewritten. When 'From' is a host name, it defaults to 302.                                                                                                                       |
| Assets  | Specifies if the assets should also be considered for this rewrite/redirect. If true, the assets won't be redirected. Any file that has not an .html extension and has not an empty mime type is considered as a static asset. This variable is used only when 'From' is a path and not an absolute URL. |
| Cdn     | Tells Stormkit that this request should be served from the CDN and not from the lambdas.                                                                                                                                                                                                                 |
| Replace | Specifies whether a string replace should be used while redirecting. When used with the `status` field, it will replace the `from` value with the `to` value.                                                                                                                                            |
| Host    | Restricts the redirect rule to the specified host name.                                                                                                                                                                                                                                                  |

</section>

## Redirect non-www to www

<section>

```yaml
app:
  - redirects:
      - from: stormkit.io
        to: www.stormkit.io
        status: 301
        replace: true
```

With `replace: true` we basically tell Stormkit to keep the URL. For instance when it's `true`, https://stormkit.io/docs will be redirected to https://www.stormkit.io/docs, when it's false it will be redirected to https://www.stormkit.io.

</section>

## Path rewrites

<section>

```yaml
app:
  - redirects:
      - from: /dist/*
        to: /my-other-dist/
        replace: true
```

You can rewrite paths by using the combination of `*` in the `from` setting and `replace` being set to `true`. This will tell Stormkit to replace anything that matches the 'from' statement with the 'to' statement, and keep the rest of the url.

Examples with the above settings:

| From                 | To                            |
| -------------------- | ----------------------------- |
| /index.html          | Uneffected                    |
| /dist/index.html?q=1 | /my-other-dist/index.html?q=1 |

</section>

## SPA config

<section>

```yaml
app:
  - redirects:
      - from: /*
        to: /index.html
        assets: false
```

The above example will rewrite all requests to `index.html`. It applies only to CDN requests since `cdn` is set `true`. This is useful for single page applications.

</section>

## Serve from the CDN

<section>

```yaml
app:
  - redirects:
      - from: /favicon.ico
        to: /favicon.ico
        cdn: true
```

By default Stormkit provides an endpoint to serve files from the CDN. Sometimes however we need to serve files from the same domain.
If you're using an isomorphic application, requests to the same domain will tell Stormkit to forward the request to the lambda function. Luckily, by setting the `cdn` config `true` we tell Stormkit to serve the files from the CDN.

</section>

## Host matching

<section>

```yaml
app:
  - redirects:
      - from: /dist/*
        to: /my-other-dist/
        replace: true
        host: example.org
```

When the `host` parameter is specified, Stormkit will check that the request host matches the parameter value. This is useful when you have a monorepo with multiple apps hosted and you want to make sure that the redirect applies only to given hosts.

</section>
