---
title: Deploy Your Project with Stormkit
description: Use deploy by Stormkit button in your repository to allow other users up and running quickly.
---

# Deploy Your Project with Stormkit

By incorporating our "Deploy" button into your repository's markdown, you can easily facilitate the cloning of your GitHub repository and its subsequent deployment on Stormkit. This functionality only works with **Github's template repositories** offering a user-friendly deployment process.


i.e for

<section>

https://github.com/stormkit-io/monorepo-template-react

Markdown looks something like following

```bash
[![Deploy with Stormkit](https://www.stormkit.io/button.svg)](https://api.stormkit.io/deploy?template=https%3A%2F%2Fgithub.com%2Fstormkit-io%2Fmonorepo-template-react)
```

</section>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deploy Button Generator</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    .copy-icon {
      cursor: pointer;
    }
    .copy-icon {
      cursor: pointer;
    }
    .custom-button {
      background-color: #78193B;
      color: white;
      border-color: #78193B;
    }
    .custom-button:hover {
      background-color: #5B1227;
      border-color: #5B1227;
    }
  </style>
</head>
<body>

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="input-group mb-3">
          <input type="text" id="githubUrl" class="form-control" placeholder="Enter GitHub URL">
          <div class="input-group-append">
            <button class="btn custom-button" onclick="checkGitHubUrl()">Generate</button>
          </div>
        </div>
        <div>
          <pre style="color:white;" id="result"></pre>
          <button class="btn custom-button ndary btn-block" id="copyButton" style="display: none;" onclick="copyMarkdown()">Copy Markdown</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    function checkGitHubUrl() {
      const inputElement = document.getElementById("githubUrl");
      const resultElement = document.getElementById("result");
      const copyButton = document.getElementById("copyButton");
      const githubUrl = inputElement.value.trim();

      // GitHub repository URL
      const githubUrlPattern = /^(?:https?:\/\/)?github\.com\/([^/]+)\/([^/]+)$/;

      if (githubUrl.match(githubUrlPattern) && !githubUrl.endsWith(".git")) {
        const encodedUrl = encodeURIComponent(githubUrl);
        const markdown = `[![Deploy with Stormkit](https://www.stormkit.io/button.svg)](https://api.stormkit.io/deploy?template=${encodedUrl})`;
        resultElement.innerHTML = markdown;
        window.generatedMarkdown = markdown;
        copyButton.style.display = "block";
      } else {
        resultElement.innerHTML = "Invalid GitHub URL.\nPlease provide a valid GitHub \nrepository URL in the format:\nhttps://github.com/username/repository";
        window.generatedMarkdown = "";
        copyButton.style.display = "none";
      }
    }

    function copyMarkdown() {
      if (window.generatedMarkdown) {
        const dummyTextarea = document.createElement("textarea");
        dummyTextarea.value = window.generatedMarkdown;
        document.body.appendChild(dummyTextarea);
        dummyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(dummyTextarea);
        const copyButton = document.getElementById("copyButton");
        copyButton.innerText = "Copied!";
      }
    }
  </script>
</body>
</html>