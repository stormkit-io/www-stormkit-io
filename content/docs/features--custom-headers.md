---
title: Custom headers
description: Custom headers enable you to modify or supplement the default HTTP headers provided by Stormkit when a client requests your site.
keywords: custom headers
---

# Custom Headers

To enable Stormkit to add custom headers to served files, follow these steps:

- Introduce a file containing rules into your code base.
- Include the file name in the build parameters.

Check out our [YouTube](https://www.youtube.com/watch?v=0-JE_MoXP68) video to see it in action.

**Note: Custom headers are not applied to responses from functions.**

Header rules are structured in multi-line blocks. Each block begins with a URL or URL pattern specifying where the rule's headers should take effect. Following this, a list of header names and their corresponding values is indented on the subsequent line.

```
/*
  # This will be applied all file types
  X-Message: Hello World!

  # These will be applied only for Javascript files
/*.js
  # Allow CORS for JS files.
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: *
  Access-Control-Allow-Methods: *
```

You can always review the deployment manifest to understand how Stormkit builds your code. This allows you to easily see which headers are applied to which files.

<div class="img-wrapper">
    <img src="/assets/blog/manifest.gif" alt="Deployment manifest will show details" />
</div>
