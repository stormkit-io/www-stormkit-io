<template>
  <div class="text-blue-50">
    <sk-background class="mb-16" top-none />
    <nuxt />
    <gdpr-banner />
  </div>
</template>
<script>
import GdprBanner from '../components/molecules/GdprBanner'
import SkBackground from '../components/atoms/Background'

export default {
  components: {
    GdprBanner,
    SkBackground
  }
}
</script>
