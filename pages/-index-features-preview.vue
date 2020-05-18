<template>
  <div>
    <div v-if="isLoading" class="absolute inset-0">
      <div class="flex w-full h-full items-center justify-center">
        <sk-spinner />
      </div>
    </div>
    <component :is="currentPreview.component" v-if="currentPreview.component" />
    <video
      v-if="currentPreview.video && !isMobile"
      autoplay
      playsinline
      :src="currentPreview.video"
      @loadeddata="setIsLoaded"
    >
      <span>Your browser does not support the video tag.</span>
    </video>
    <img
      v-if="currentPreview.image && isMobile"
      :src="currentPreview.image"
      class="rounded-lg"
      alt="Stormkit Preview"
      @load="setIsLoaded"
    />
  </div>
</template>
<script>
import SkDeploymentPreviews from './-index-features-deployment-previews'
import SkSpinner from '~/components/atoms/Spinner'

export default {
  components: {
    SkDeploymentPreviews,
    SkSpinner
  },
  props: {
    currentPreview: { type: Object, required: true }
  },
  data() {
    return {
      isLoading: !this.currentPreview.component
    }
  },
  computed: {
    isMobile() {
      if (typeof navigator === 'undefined') {
        return false
      }

      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    }
  },
  watch: {
    currentPreview() {
      this.isLoading = !this.currentPreview.component
    }
  },
  methods: {
    setIsLoaded() {
      this.isLoading = false
    }
  }
}
</script>
