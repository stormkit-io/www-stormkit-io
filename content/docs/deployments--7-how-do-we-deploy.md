---
title: How does Stormkit deploy?
description: Information about how Deployments work on Stormkit.
---

# How do we deploy?

Stormkit Cloud runs on AWS. Each deployment can contain:

1. `Static files`
2. `Server files`
3. `API files`

All of these files are securely stored in our S3 buckets.

By default, Stormkit will check for a top-level `.stormkit` subfolder which has the following structure:

- `public/`
- `server/`
- `api/`

If, instead of the `.stormkit` subfolder, a different output folder is configured, the same structure is also checked against that folder.

If the deployment does not contain a `.stormkit` subfolder and the output folder is not specified, Stormkit will check for the following subfolders:

- `out`
- `output`
- `dist`
- `build`

**Note:** If you'd like to change the location `.stormkit` folder, you can do it so configuring the `Root Directory` option in the Environment Settings page.

## Server files

Inside the `server` subfolder, if one of the following files are located, it'll be considered as the entry point:

- `index.js`
- `server.js`
- `main.js`

These files can also have the `mjs` and `cjs` extensions. If none of them is found, the function will return 404.

The entry file has to export a function called `handler`, wrapped by our `serverless` helper to 
receive a standard Node.js Request and Response objects.

```ts
import serverless from "@stormkit/serverless";

export const handler = serverless(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write("Hello from " + req.url);
    res.end();
  }
);
```

## API files

Our API files follows the file system routing. You can read more on that in our [dedicated section](/docs/features/writing-api) for API Files.

Please note that each API file has to be a self-standing file, with a default export similar to the Server entry file:

```ts
export const handler = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write("Hello from " + req.url);
    res.end();
}
```

In this case, the `serverless` wrapper is omitted because the API function has it's own entry file, which performs the routing mechanism and loads the appropriate file.

## Static files

All files under the `.stormkit/public` (or the configured output folder) will be deployed to our S3 bucket and will be served by our Load Balancer.