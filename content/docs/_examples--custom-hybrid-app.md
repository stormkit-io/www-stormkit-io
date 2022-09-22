---
title: Custom Hybrid app
---

# Custom Hybrid app

You can easily enable server side functionality by navigating to `My application > My environment > Edit` and specifying the location of your server entry file. The path to the file is relative to the project root. You server file needs to export a function like:


```javascript
// src/my-server.js
import React from "react";
import { renderToString } from "react-dom/server";

export default async(req, res) => {
    const apiResponse = await fetch("https://api.example.org/products");
    const products = await apiResponse.json();

    res.status(200);
    res.setHeader("X-Custom-Header", "my-custom-header");

    return res.send({
        footer: "My footer",
        content: renderToString(
            <div>
                <h1>List of products:</h1>
                <div>
                    {products.map(p => <div key={p.id}>{p.name}</div>)}
                </div>
            </div>
        ),
    })
}
```

The object keys specified in the response body needs to correspond with the mounted elements in the index.html. You can define where to mount these values as a namespaced element in the following format: `<sk:myKeyName />`. For instance, above the body object defines two properties: content and footer. In the document below we define where to mount them respectively with `<sk:content />` and `<sk:footer />`.

```html
<!-- public/index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>My awesome app</title>
  </head>
  <body>
    <div id="root">
        <sk:content />
    </div>
    <sk:footer />
  </body>
</html>
```

If you're wondering why we have used namespaced elements for templating, it is simply because the alternatives such as using string templates or comments do not work for all cases. For instance if we would specify string templates in the document, they would then appear in development environments while loading the page. Similarly, webpack strips comments in most of the production environments. Therefore, the namespaced elements are the safest way to make templating work.

### Entry file

The entry file, as shown above, exports a function. The exported function has the same signature with traditional Node.js applications. It receives a [Request](https://nodejs.org/api/http.html#http_class_http_clientrequest) and [Response](https://nodejs.org/api/http.html#http_class_http_serverresponse) object as arguments. To return a server response, use the Response.send method which expects either a string or an object as an argument. The object is a key-value pair object which the key represents the tag name in the html document and the value is the string that will be replaced with the placeholder.

