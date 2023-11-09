---
title: Building Dynamic Web Applications with SSR, Htmx and Handlebars.js
date: 2023-11-09
description: Learn how to create interactive web applications using Server-Side Rendering (SSR), htmx for seamless AJAX interactions, and Handlebars.js for dynamic templating.
---


In today's rapidly evolving web development landscape, it has become easier than ever to create dynamic and interactive web applications.

One powerful combination of technologies that enables this process includes Server-Side Rendering (SSR), [htmx](https://htmx.org/) for seamless AJAX interactions, and [Handlebars.js](https://handlebarsjs.com/) for dynamic templating. Additionally, we will leverage [Vite.js](https://vitejs.dev/), a lightning-fast build tool.

This tutorial will walk you through the process of building a simple web application that features infinite scrolling using these technologies. Additionally, we'll deploy the application on [Stormkit.io](http://stormkit.io/).

# ****Configuring Vite.js for Stormkit****

To get started, we'll configure Vite.js to generate output compatible with Stormkit. This involves setting up a development server for local development and generating a **`.stormkit`** folder during the build process. This folder can contain three subfolders:

- **`public`** for static assets and pages
- **`api`** for defining API endpoints (which won't be covered in this post)
- **`server`** for server-side rendering, also implemented as a lambda function

In our example, we only want views that are generated with handlebars.js so we don’t need to configure anything for public and we will go through api in another post.

For simplicity, we will focus on the important sections of the configuration. Most of the configuration is adapted from the Vite.js SSR [guide](https://vitejs.dev/guide/ssr.html). You can find the complete configuration [here](https://github.com/stormkit-io/vite-handlerbar-htmx/blob/main/vite.config.ssr.ts).

```javascript
build: {
    ssr: true,
    ssrManifest: true,
    minify: false,
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: { server: "src/entry-server.ts" },
      output: {
        dir: ".stormkit/server",
        format: "esm",
        entryFileNames: "[name].mjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
    },
  },
plugins: [
    viteStaticCopy({
      targets: [
        // copy html files to be used as template
        {
          src: 'src/ssr/handlers/views/**', // Adjust the source pattern according to your project structure
          dest: "../.stormkit/server/ssr/handlers/views/",
        },
        {
          src: "public/**",
          dest: "../.stormkit/public",
        },
      ],
    }),
  ],
```

This configuration instructs Vite.js to output files to **`.stormkit/server`**, with the entry file specified in **`src/entry-server.ts`**. Static assets are also copied to the appropriate directories so that we can use them in our dynamically generated view.

# ****Implementing Server-Side Rendering Logic****

The next step is to create the **`entry-server.js`** file. This file serves as the entry point for routing different paths to their respective views:

```javascript
import serverless from "@stormkit/serverless";
import { Response, Render } from "./ssr/render";

export type RenderFunction = (url: string) => Promise<Response>;

export const render: RenderFunction = async (url) => {
   return Render(url);
};

// This handler add support for Stormkit environment. This is
// the entry point of the serverless application.
export const handler = serverless(async (req: any, res: any) => {
  // We are in assets folder
  // const dir = path.dirname(fileURLToPath(import.meta.url));
  // const html = fs.readFileSync(path.join(dir, "./index.html"), "utf-8");

  const { content, head } = await Render(req.url?.split(/\?#/)[0] || "/");

  res.writeHead(
    head.statusCode || 200,
    head.statusMessage || "OK",
    Object.assign({}, head.headers, {
      "Content-Type": "text/html; charset=utf-8",
    })
  );
  res.end(content);
});
```

We export two functions, `render` and `handler` . `render` will be used by dev server while `handler` is a wrapper provided by [Stormkit.io](http://stormkit.io/) to make the code compatible with [AWS Lambda](https://github.com/stormkit-io/serverless/).  Stormkit will use that during build to upload your function.

In the **`Render`** function, we use **`path-to-regexp`** to match the URL path to functions that will render views. This library is  used in Express.js. The function also includes middleware support and handles query parameters.

Below you can see contents of the **`Render`** function

```javascript
import { pathToRegexp } from "path-to-regexp";
import { testHandler } from "./handlers/test-handler";
import { indexHandler } from "./handlers/index-handler";

// Add more routes as needed
const routes = [
  { path: "/foo/:name", handler: testHandler },
  { path: "/", handler: indexHandler },
];

function middleware1(_params) {
  // write your middleware
}

const middlewares = [middleware1];

export interface Response {
  head: Head,
  content: string,
}

interface Head {
  statusCode: number;
  statusMessage?: string;
  headers?: Record<string, string | string[]>;
}

export const Render = (url: string): Response => {

  const params = {};
  // extract query parameters place them
  // inside params
  if (url.includes("?")) {
    params["query"] = {};
    let [tempUrl, urlParams] = url.split("?");
    url = tempUrl;
    let paramPair = new URLSearchParams(urlParams);
    paramPair.forEach((v, k) => {
      params["query"][k] = v;
    });
  }

  // if not path is matched return 404, default view
  let res = {
    head: {statusCode: 404},
    content: `
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>404 - Page Not Found</title>
       </head>
       <body>
           <div class="container">
               <h1>404 - Page Not Found</h1>
               <p>The page you are looking for does not exist.</p>
               <p><a href="/">Go back to the homepage</a></p>
           </div>
       </body>
       </html>`
  }
  for (const route of routes) {
    const keys = [];
    const pattern = pathToRegexp(route.path, keys);
    const match = pattern.exec(url);
    if (match) {
      keys.forEach((key, index) => {
        params[key.name] = match[index + 1];
      });

      // go through middleware if you want to run functions
      // for every view
      middlewares.forEach(middleware => middleware(params));
      res = route.handler(params);
      break;
    }
  }

  return res;
};

export default Render;
```

We have added comments to explain the code, but essentially what we are doing is invoking a function to render an HTML using handlerbars.js for a given URL. You have the option to use any other templating engine or simply return a string that will be treated as HTML.

Now, let's dive into creating a basic view using Handlebars.js:

```javascript
import { Response } from "../render";
import fs from "fs";
import path from "path";
import Handlebars from "handlebars";

export function indexHandler(_): Response {
  const currentFile = import.meta.url;
  const fileUrl = path.join(path.dirname(currentFile), "views", "index.html");
  // convert to path
  const contents = fs.readFileSync(fileUrl.replace("file:", ""), "utf8");
  const template = Handlebars.compile(contents);
  const body = template({});

  return {
    head: { statusCode: 200 },
    content: body,
  };
}
```

This is function will be invoked when we visit `/` . It  reads index.html and renders with Handlebars. For this view we don't necessarily need handlerbars.js since we are not passing any data.

You can see the dev server configuration [here](https://github.com/stormkit-io/vite-handlerbar-htmx/blob/main/src/vite-server.ts). It's mostly copy/paste from the vitejs [guide](https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server). Basically, we are passing everything to the `render` function we exported.

# ****Implementing Infinite Scrolling with htmx****

Now that we have everything setup for SSR lets to a infinite scrolling using htmx. Idea is to have a table that presents data and when we view last row of the table we need to request next page. For sake of simplicity we implemented a function that generates random array of strings so our view will get page=<number> parameter and it will fill the table, htmx will fetch data and append to our table.

Lets go through  our view first generated in server side.

```javascript
import path from "path";
import { Response } from "../render";
import fs from "fs";
import Handlebars from "handlebars";

export function testHandler(params): Response {
  const currentFile = import.meta.url;
  const page = params['query']['page'] * 1 || 1
  const words = generateRandomStrings(10)
  // return only partial html
  let contents = ''
  // for upcoming pages return html with data
 // htmx will append it to table
  if (page > 1) {
    contents = `
      {{#each words}}
        {{#if @last}}
        <tr hx-get="/foo/contacts/?page={{../nextPage}}" hx-trigger="revealed" hx-swap="afterend">
          <td> *** {{this}} *** {{../nextPage}}  </td>
        </tr>
        {{else}}
          <tr> <td> {{this}}  </td> </tr>
        {{/if}}
      {{/each}}
    `
  } else {
   const fileUrl = path.join(path.dirname(currentFile), "views", "test.html");
   contents = fs.readFileSync(fileUrl.replace("file:", ""), "utf8");
  }

  const template = Handlebars.compile(contents);
  const body = template({words: words, nextPage: page + 1 });

  return {
    head: { statusCode: 200 },
    content: body,
  };
}

function generateRandomStrings(numStrings) {
   // check repo for details if you like
}
```

We will read `test.html` and populate with our first set of data.

```html
<html>
  <script src="https://unpkg.com/htmx.org@1.9.6"></script>
  <body>
    <h1>Name Table</h1>
    <table border="1">
      <tr>
        <th>Words</th>
      </tr>
      {{#each words}}
        {{#if @last}}
        <tr hx-get="/foo/contacts/?page={{../nextPage}}" hx-trigger="revealed" hx-swap="afterend">
          <td> *** {{this}} *** {{../nextPage}}  </td>
        </tr>
        {{else}}
          <tr> <td> {{this}}  </td> </tr>
        {{/if}}
      {{/each}}
    </table>
  </body>
</html>
```

When we create our last row of the table, we sprinkle some htmx.  Htmx will make request for next page and append returning html to table. With very little code we added interactivity to our server side rendered page.

This approach enables us to create a highly interactive web application with minimal code, thanks to the power of SSR, htmx, and Handlebars.js.

You can find an example project [here](https://github.com/stormkit-io/vite-handlerbar-htmx/). Deployment links are in README.md

Deploying this application to Stormkit from this point on is a breeze. Simply import your application and click the "Deploy Now" button.