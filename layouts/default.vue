<template>
  <div class="pt-16 text-blue-50">
    <sk-background class="mb-16" top-none />
    <sk-header />
    <nuxt />
    <sk-footer />
    <gdpr-banner />
  </div>
</template>
<script>
import Vue from 'vue'
import GdprBanner from '~/components/molecules/GdprBanner'
import SkFooter from '~/components/molecules/AppFooter'
import SkHeader from '~/components/molecules/AppHeader'
import SkBackground from '~/components/atoms/Background'
import SkInfoBox from '~/components/atoms/InfoBox.vue'
import SkArticleImage from '~/components/atoms/ArticleImage.vue'

Vue.component('SkInfoBox', SkInfoBox)
Vue.component('SkArticleImage', SkArticleImage)

export default {
  components: {
    GdprBanner,
    SkBackground,
    SkHeader,
    SkFooter,
  },
}
</script>
