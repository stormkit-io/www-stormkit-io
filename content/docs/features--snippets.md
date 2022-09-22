---
title: Snippet injection
---

# Snippet injection

<section>
You can inject snippets with Stormkit. This is extremely helpful to manage third party scripts. These snippets are handled at an environment level which makes it possible to inject different snippets based on the environment. To inject a snippet click on an environment and look for the Snippets menu item. This page will display all snippets that are defined for this environment. You can turn them on and off easily with a switch. The effects are immediate, you won't have to redeploy.

<sk-article-image 
    src="docs/features/snippets.png" 
    alt="Snippets" 
    class="bg-blue-50 mt-8"></sk-article-image>

</section>

## Adding a new snippet

<section>

In the same page, click on <b>New snippet</b>. A modal will pop up.

<sk-article-image 
    src="docs/features/snippets-edit.png" 
    alt="Example banner"
    class="bg-blue-50 mt-8"></sk-article-image>

| Setting      |                                                               Description                                                               |
| ------------ | :-------------------------------------------------------------------------------------------------------------------------------------: |
| **Title**    |                                   The title is used internally to describe what the snippet is about.                                   |
| **Content**  |                                       This is the content that will be injected in the document.                                        |
| **Location** | The location specifies where to inject the snippet. You can inject it in either body or head and you can either append or prepend them. |
| **Enabled**  |                     Whether the snippet is enabled or disabled. Effects are immediate, you won't have to redeploy.                      |

</section>
