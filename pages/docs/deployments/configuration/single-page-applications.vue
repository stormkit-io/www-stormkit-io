<template>
  <main>
    <sk-info-box theme="info" class="mb-4">
      Based on your
      <nuxt-link to="/docs/deployments/configuration">configuration</nuxt-link>
      Stormkit determines whether your application is served as single page or
      hybrid application.
    </sk-info-box>
    <sk-spa title="Single Page Applications" />
  </main>
</template>
<script>
import SkSpa from './-spa'
import SkInfoBox from '~/components/atoms/InfoBox'

export default {
  layout: 'docs',

  components: {
    SkSpa,
    SkInfoBox
  },

  head() {
    return {
      title: 'Stormkit - Single page applications'
    }
  }
}
</script>
