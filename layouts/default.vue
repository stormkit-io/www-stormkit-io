<template>
  <div class="text-blue-50">
    <sk-background class="mb-16" top-none />
    <nuxt />
    <sk-footer />
    <gdpr-banner />
  </div>
</template>
<script>
import GdprBanner from '../components/molecules/GdprBanner'
import SkFooter from '../components/molecules/AppFooter'
import SkBackground from '../components/atoms/Background'

export default {
  components: {
    GdprBanner,
    SkBackground,
    SkFooter
  }
}
</script>
