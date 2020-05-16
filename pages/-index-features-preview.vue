<template>
  <div>
    <component :is="currentPreview.component" v-if="currentPreview.component" />
    <video v-if="currentPreview.video && !isMobile" autoplay>
      <source :src="currentPreview.video" type="video/mp4" />
      <span>Your browser does not support the video tag.</span>
    </video>
    <img
      v-if="currentPreview.image && isMobile"
      :src="currentPreview.image"
      class="rounded-lg"
      alt="Stormkit Preview"
    />
  </div>
</template>
<script>
import SkDeploymentPreviews from './-index-features-deployment-previews'

export default {
  components: {
    SkDeploymentPreviews
  },
  props: {
    currentPreview: { type: Object, required: true }
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
  }
}
</script>
