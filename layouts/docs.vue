<template>
  <div class="pt-16 text-blue-50 max-w-screen-2xl m-auto">
    <docs-header />
    <gdpr-banner />
    <div>
      <sk-background top-none />
      <div class="flex flex-col md:flex-row bg-white shadow w-full">
        <nuxt />
      </div>
    </div>
    <sk-footer />
  </div>
</template>
<script>
import SkBackground from '~/components/atoms/Background'
import SkFooter from '~/components/molecules/AppFooter'
import DocsHeader from '~/components/molecules/DocsHeader'
import GdprBanner from '~/components/molecules/GdprBanner'

export default {
  components: {
    GdprBanner,
    DocsHeader,
    SkFooter,
    SkBackground,
  },
}
</script>
