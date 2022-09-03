<template>
  <div class="text-blue-50" :class="{ 'pt-16': !uiOptions.noHeader }">
    <sk-background class="mb-16" top-none />
    <sk-header v-if="!uiOptions.noHeader" />
    <nuxt />
    <template v-if="!uiOptions.noFooter">
      <sk-footer />
      <gdpr-banner />
    </template>
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

  computed: {
    uiOptions() {
      const opts = this.$route.query?.ui?.split(',') || []

      return {
        noFooter: opts.includes('no-footer'),
        noHeader: opts.includes('no-header'),
      }
    },
  },
}
</script>
