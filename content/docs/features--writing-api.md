---
title: API
---

# <span class="inline-flex items-center">Writing APIs <span class="text-sm ml-2">(Beta)</span></span>

<section>

You can create node.js/typescript APIs using Stormkit.

<sk-article-image 
    src="docs/features/api-hello-world.gif" 
    alt="API Hello World" 
    class="bg-blue-50 mt-8"></sk-article-image>

</section>

## How it works

<section>

During build time, Stormkit checks if there is a `.stormkit/api` folder. When the folder is found,
it uploads the folder to a lambda function. The <a href="https://github.com/stormkit-io/serverless/blob/main/src/entries/api/server.ts" target="_blank" rel="noopener noreferrer">entry file</a> of the function then takes the `Request` and calls the relevant file based on file system routing. If nothing is found, it returns 404.

</section>

## Write and deploy your API

<section>

Create an `/api` folder in the top level of your repository and an `/index.ts` file in it. 
Each file is treated as a separate endpoint and it needs to export a default function 
with the signature shown below.

```ts
// api/index.ts
import http from "http";

export default (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.write("Function endpoint: /api");
  res.end();
};
```


```ts
// api/user/subscribe.ts
import http from "http";

export default (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.write("Function endpoint: /api/user/subscribe");
  res.end();
};
```

The table below shows how the API routing works.

```ts
+ /api
  - index.ts        // /api
  + /users
    - index.ts      // /api/users
    - subscribe.ts  // /api/users/subscribe
    - create.ts     // /api/users/create
    + /[id]
      - remove.ts   // /api/users/:id/remove (where :id is a placeholder for dynamic values)
```

<p class="mt-4">
<sk-info-box>
For more details on how the filesystem routing works, check the <a href="https://github.com/stormkit-io/serverless/blob/main/src/utils/filesys.ts#L32" target="_blank" rel="noopener noreferrer">source code</a> of the matchPath function.
</sk-info-box>
</p>

Now go ahead and [deploy](/docs/deployments) your application. When Stormkit detects an `/api` source folder,
it checks whether it is already built or not. If the `/api` folder is not yet built, Stormkit tries to build
your api using Webpack and then deploys the output to the lambda function. This process is automatic. 

</section>

## Custom builds

<section>

If your source code contains more complex use cases and Stormkit fails to build, you can build the source code
yourself. Here's the `webpack` config Stormkit uses to build the api. You can copy this and extend it based on
your needs.

```ts
import type { Configuration } from "webpack";
import * as webpack from "webpack";
import * as path from "path";
import * as dotenv from "dotenv";
import { glob } from "glob";

const config: Configuration = {
  mode: "production",
  target: "node",

  // Iterate over the `api` subfolder and create an entry file
  // for each `.ts` file. This will tell webpack to create a bundle
  // for each function.
  entry: glob.sync("./api/**/*.{js,ts,tsx}").reduce((acc, file) => {
    acc[file.replace(/^\.\/api\//, "").split(".ts")[0]] = file;
    return acc;
  }, {}),

  output: {
    filename: "[name].js",
    // Build into `.stormkit/api` - Stormkit will take care of the rest.
    path: path.resolve(__dirname, ".stormkit/api"),
    // We need to use commonjs so that webpack exports the functions.
    library: {
      type: "commonjs",
    },
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            noEmit: false,
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  // Inject .env variables into the bundles.
  plugins: [
    new webpack.DefinePlugin(
      Object.keys(dotenv.config() || {}).reduce((obj, key) => {
        obj[`process.env.${key}`] = JSON.stringify(process.env[key]);
        return obj;
      }, {})
    ),
  ],
};

export default config;
```

</section>

## Testing locally

<section>

In order to test the API locally go ahead and install the [`@stormkit/serverless`](https://www.github.com/stormkit-io/serverless) package.

```bash
npm i -D @stormkit/serverless
```

Update `package.json`:

```json
{
  "scripts": {
    "dev:api": "SERVERLESS_PORT=9090 node ./node_modules/@stormkit/serverless/dist/dev-server"
  }
}
```

And run the script:

```bash
npm run dev:api
```

You can access the api from http://localhost:9090/api.

</section>