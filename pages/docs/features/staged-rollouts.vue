<template>
  <main>
    <h1>Staged Rollouts</h1>
    <section>
      <p>
        You can publish your deployments gradually with Stormkit. This will
        allow testing your application with a small percentage of users and then
        gradually increase the traffic as you get more confident. And the best
        part is, it's dead simple. Here is a video to show how it's done:
        <br />
        <br />
        <iframe
          title="Stormkit - Staged rollouts"
          class="block rounded-lg shadow my-4 mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gF9owMZv12Q"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </p>
    </section>
    <h2>Steps</h2>
    <section>
      <p>
        Head to your deployments page. Click on the three dots next to the
        deployment you want to publish and hit <b>publish</b>. If this is your
        first deployment, you will only see a button to proceed. Otherwise, you
        will see previously deployed versions and decide with how much traffic
        you'd like your new deployment to be published.
      </p>
    </section>
    <h2>How it works</h2>
    <section>
      <p>
        Behind the scenes, when Stormkit has more deployments to publish, it
        decides which one to display based on the given percentages. Once a
        version is displayed, the user will keep seeing the same version until
        it is unpublished or the user deletes their cookies. Stormkit places a
        cookie named <code>sk_variant</code> with the id of the displayed
        deployment. If you need to manually change the version, simply overwrite
        the cookie value with the id of the other deployment. You can find the
        id in the address bar when you click on a deployment. Keep in mind that
        this deployment needs to be published, otherwise Stormkit won't
        recognise the cookie value and will display one of the published
        versions.
        <br />
        <br />
        As this operation is completely done on the load-balancer level the user
        won't see any flicker effect which client-side split testing libraries
        usually cause.
      </p>
    </section>
  </main>
</template>
<script>
export default {
  layout: 'docs'
}
</script>
