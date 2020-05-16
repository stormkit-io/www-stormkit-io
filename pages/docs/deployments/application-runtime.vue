<template>
  <main>
    <h1>Auto deployments</h1>
    <section>
      <p>
        You can change the application runtime whenever needed. To do so,
        navigate to the <b>Application's settings</b> page and find the
        <b>Runtime</b> field. This will effect your deployment runtime and
        Lambda function (if any). Please keep in mind that once applied, the
        settings will be available only for the new applications.
        <img :src="pngApplicationRuntime" alt="Application Runtime" />
      </p>
    </section>
  </main>
</template>
<script>
import pngApplicationRuntime from '../../../assets/images/docs/deployments/application-runtime.png'

export default {
  layout: 'docs',

  data() {
    return {
      pngApplicationRuntime
    }
  },

  head() {
    return {
      title: 'Stormkit - Application runtime'
    }
  }
}
</script>
