<template>
  <div class="text-blue-50 min-h-screen flex flex-col">
    <sk-background class="mb-16" top-none />
    <sk-header />
    <nuxt />
    <sk-footer />
    <gdpr-banner />
  </div>
</template>
<script>
import GdprBanner from '~/components/molecules/GdprBanner'
import SkFooter from '~/components/molecules/AppFooter'
import SkHeader from '~/components/molecules/AppHeader'
import SkBackground from '~/components/atoms/Background'

export default {
  components: {
    GdprBanner,
    SkBackground,
    SkHeader,
    SkFooter
  }
}
</script>
