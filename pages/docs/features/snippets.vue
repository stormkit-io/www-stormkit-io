<template>
  <main>
    <h1>Snippet injection</h1>
    <section>
      <p>
        You can inject snippets with Stormkit. This is extremely helpful to
        manage third party scripts. These snippets are handled at an environment
        level which makes it possible to inject different snippets based on the
        environment. To inject a snippet click on an <b>environment</b> and look
        for the <b>Snippets</b> menu item. This page will display all snippets
        that are defined for this environment. You can turn them on and off
        easily with a switch. The effects are immediate, you won't have to
        redeploy.
        <img :src="pngSnippets" alt="Snippets" />
      </p>
    </section>
    <h2>Adding a new snippet</h2>
    <section>
      <p>
        In the same page, click on <b>New snippet</b>. A modal will pop up.
        <img :src="pngSnippetsEdit" alt="Edit/add snippet" />
      </p>
      <table>
        <thead>
          <tr>
            <th width="35%">Setting</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold">Title</td>
            <td>
              The title is used internally to describe what the snippet is
              about.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Content</td>
            <td>
              This is the content that will be injected in the document.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Location</td>
            <td>
              The location specifies where to inject the snippet. You can inject
              it in either
              <code>body</code> or <code>head</code> and you can either
              <b>append</b> or <b>prepend</b> them.
            </td>
          </tr>
          <tr>
            <td class="font-bold">Enabled</td>
            <td>
              Whether the snippet is enabled or disabled. The effects are
              immediate, you won't have to redeploy.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2>Editing a snippet</h2>
    <section>
      You can edit a snippet by visiting the <b>Snippets</b> page and clicking
      on <b>Edit</b> button on the menu that pops once you click the three dots.
    </section>
    <h2>Removing a snippet</h2>
    <section>
      You can remove a snippet by visiting the <b>Snippets</b> page and clicking
      on <b>Delete</b> button on the menu that pops once you click the three
      dots.
    </section>
  </main>
</template>
<script>
import pngSnippets from '../../../assets/images/docs/features/snippets.png'
import pngSnippetsEdit from '../../../assets/images/docs/features/snippets-edit.png'

export default {
  layout: 'docs',
  data() {
    return {
      pngSnippets,
      pngSnippetsEdit
    }
  }
}
</script>
