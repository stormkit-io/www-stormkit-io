<template>
  <main>
    <h1>Deployments</h1>
    <section>
      <p>
        Stormkit is able to build and deploy your application. Since we're
        powered by the tech giant AWS, all your deployments are secure and
        highly available. Static assets will be hosted on S3 buckets, which will
        then be served through our CDN. If you have server side logic, then your
        application will be powered by AWS Lambdas. This methodology brings a
        lot of advantages while keeping the drawbacks minimal.
      </p>
      <h2 class="mt-8">Advantages</h2>
      <h3>1. Scalability</h3>
      <p>
        Lambdas scale infinitely very well. So all of a sudden, your application
        receives millions of unexpected requests, you should be covered because
        each concurrent request will spawn a new Lambda.
      </p>
      <h3>2. Immutable deployments</h3>
      <p>
        Each of your deployment will receive a unique endpoint which can be
        visited at any time until the deployment is deleted. This is extremely
        useful for testing new features or spotting bugs by checking the last
        working version.
      </p>
      <h3>3. Cost saving</h3>
      <p>
        Lambdas are extremely cost-friendly. This gives us the chance to build a
        lot of added value around your development experience and yet keep the
        costs low.
      </p>
      <h2 class="mt-8">Points of concern</h2>
      <h3>1. Cold starts</h3>
      <p>
        Lambdas are notorious for their cold starts. A cold start occurs when
        the Lambda function is no longer used for a given time of period and AWS
        decides to shut it down to save resources. Next time the function is
        called, AWS will take some time to spin it up. While this can be
        considered as a negative point, in reality, it is no different than
        auto-scaling applications. When those applications receive unexpected
        spikes, they spin up new machines. This also takes some time. With
        Lambdas, if you have constant traffic, you'll not experience cold starts
        that much. Also, bear in mind that the smaller your deployment size is,
        the faster will your lambda spin up and that Stormkit offers a way to
        keep your production deployments warm all the time. You can check out
        the features <nuxt-link to="/pricing" rel="Pricing">here</nuxt-link>. On
        the other hand, if you're using a static you don't have to worry about
        cold starts.
      </p>
      <h3>2. Long lived processes</h3>
      <p>
        Lambdas are designed to receive a request and respond to it
        synchronously. If you have a long lived process, such as websockets,
        Stormkit may not be the answer. In that case you can refer to other
        hosting providers such as AWS, Google Cloud Platform, Heroku or
        DigitalOcean.
      </p>
      <h3>3. Deployment sizes</h3>
      <p>
        Lambdas have a hard limit on the deployment package size. Your
        deployment, zipped, should be less than 50MBs and unzipped less than
        250MBs. Luckily, we never had a case where this was an issue.
      </p>
    </section>
  </main>
</template>
<script>
export default {
  layout: 'docs'
}
</script>
