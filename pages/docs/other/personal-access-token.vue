<template>
  <main>
    <h1>Setting personal access tokens</h1>
    <sk-info-box theme="info" class="mb-4">
      The personal access token is intended to work only for <b>GitLab</b>. If
      you need to use it with other providers, please <b>open an issue</b>.
    </sk-info-box>
    <section>
      <ol>
        <li>
          Follow
          <a
            href="https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"
            target="_blank"
            rel="noreferrer noopener"
            >this guide</a
          >
          to create a personal access token on GitLab.
        </li>
        <li><b>Make sure to have the api permission checked.</b></li>
        <li>
          Once you have created the token, copy it somewhere. You won't be able
          to access it again.
        </li>
        <li>
          Click on the menu icon on the top right of the screen and then click
          on <b>Account</b>.
        </li>
        <li>
          Find GitLab under Connected Accounts, click on
          <b>Set personal access token</b> button, it will open up a modal.
        </li>
        <li>Paste the token inside the box and hit Submit.</li>
        <li>
          The application owner must perform this operation in order to make it
          work for GitLab repositories. You can see the owner by clicking on
          your application and then navigating to the <b>Team</b> page.
        </li>
      </ol>
    </section>
    <h2>Deleting an existing token</h2>
    <section>
      <ol>
        <li>
          Click on the menu icon on the top right of the screen and then click
          on <b>Account</b>.
        </li>
        <li>
          Find GitLab under Connected Accounts, click on
          <b>Set personal access token</b> button, it will open up a modal.
        </li>
        <li>
          Click on delete existing token button. Stormkit will switch to oAuth
          in the absence of a personal access token.
        </li>
      </ol>
    </section>
  </main>
</template>
<script>
import SkInfoBox from '~/components/atoms/InfoBox'

export default {
  components: {
    SkInfoBox,
  },

  layout: 'docs',

  head() {
    return {
      title: 'Stormkit - Personal access token',
    }
  },
}
</script>
