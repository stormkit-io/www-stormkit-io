<template>
  <main>
    <h1>Welcome</h1>
    <section>
      <p>
        Stormkit is a next-gen hosting and deployment tool for javascript
        applications. It helps you focus on your application by providing a
        solution for most common technical challenges, such as deployments,
        logs, hosting, scaling and tls certificates, and saving valuable time.
      </p>
    </section>
    <h2 id="getting-started">Getting Started</h2>
    <section>
      <p>
        Stormkit integrates perfectly with your git flow. After your application
        is set, all you need to do to deploy is just to <code>git push</code>.
        To setup your application, sign in or sign up from
        <a href="https://app.stormkit.io" rel="Stormkit Application"
          >app.stormkit.io</a
        >. You can authenticate using your GitLab, GitHub or Bitbucket account.
      </p>
    </section>
    <h2 id="why-stormkit">Why Stormkit?</h2>
    <section>
      <p>
        There are several reasons why you would need a tool like Stormkit:
      </p>
      <h3>1. Improve developer experience</h3>
      <p>
        Developer experience matters. The more developers are happy from their
        workflow, the more productive they will be. Stormkit strives to
        perfectionize the deployment and application management workflow.
      </p>
      <h3>2. Focus on your application</h3>
      <p>
        For the reason mentioned above, developers tend to spend a lot of time on
        improving their workflow. Stormkit allows you to focus on your
        application rather than spending time on your infrastructure. Similar to
        low-code platforms, but for frontend infrastructure.
      </p>
      <h3>3. Added value</h3>
      <p>
        Stormkit offers very valuable features to Frontend developers, such as,
        <nuxt-link to="/docs/features/staged-rollouts"
          >Staged Rollouts</nuxt-link
        >,
        <nuxt-link to="/docs/features/remote-config">Remote Config</nuxt-link>
        and <nuxt-link to="/docs/features/snippets">Snippets</nuxt-link>. Again,
        building these features for your workflow is possible however very time
        consuming.
      </p>
      <h3>4. Performance</h3>
      <p>
        It's our job to provide a powerful infrastructure that is highly
        scalable, performant and secure.
      </p>
    </section>
    <h2 id="why-stormkit">When Stormkit?</h2>
    <section>
      <p>
        If you are:
      </p>
      <ol>
        <li>
          Spending a lot of time maintaining your frontend application's
          infrastructure
        </li>
        <li>
          Looking for an affordable way to scale your application
        </li>
        <li>
          Looking for a way to deliver as fast as possible
        </li>
        <li>
          In need of features like Staged Rollouts, Remote Configuration,
          Snippet Injections and so on
        </li>
        <li>
          Building a JAMStack or a Node.js server side rendered application
        </li>
        <li>
          Using a Headless CMS like
          <a href="https://www.storyblok.com/" rel="StoryBlok">StoryBlok</a> and
          you're looking for compatible hosting solutions
        </li>
      </ol>
      Then you may want to use Stormkit. If you're using server side
      technologies other than Node.js such as Wordpress, Drupal or Magento then
      Stormkit is not suitable for you.
    </section>
    <h2 id="contributing">Contributing</h2>
    <section>
      <p>
        The landing page and documentation of Stormkit is open-source. We'd love
        to receive your contributions. If you're interested, please join us
        <a
          href="https://github.com/stormkit-io/www-stormkit-io"
          rel="noreferrer noopener"
          target="_blank"
          >here</a
        >. Stars are also welcome :)
      </p>
    </section>
    <h2 id="community-chat">Community chat</h2>
    <section>
      <p>
        We're using Discord to engage with our community. Please join us
        <a href="https://discord.gg/6yQWhyY">here</a>. You can submit feature
        requests, point out issues or just get to know us!
      </p>
    </section>
  </main>
</template>
<script>
export default {
  layout: 'docs',

  head() {
    return {
      title: 'Stormkit - Documentation'
    }
  }
}
</script>
