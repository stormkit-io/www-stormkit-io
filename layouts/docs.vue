<template>
  <div class="text-blue-50">
    <sk-header />
    <gdpr-banner />
    <div class="page px-3 md:px-0">
      <sk-background top-none />
      <div
        class="flex flex-col md:flex-row bg-white rounded-lg shadow m-auto mt-12"
      >
        <sk-navigation
          class="rounded-tl-lg rounded-bl-lg flex-auto min-w-full md:min-w-1/4 md:max-w-xs"
        />
        <div class="docs py-6 px-6 md:px-24">
          <nuxt />
        </div>
      </div>
    </div>
    <sk-footer class="mt-12" />
  </div>
</template>
<script>
import SkBackground from '../components/atoms/Background'
import SkHeader from '../components/molecules/AppHeader'
import SkFooter from '../components/molecules/AppFooter'
import GdprBanner from '../components/molecules/GdprBanner'
import SkNavigation from './-docs-navigation'

export default {
  components: {
    GdprBanner,
    SkHeader,
    SkFooter,
    SkBackground,
    SkNavigation
  }
}
</script>
