<template>
  <div>
    <component :is="currentPreview.component" v-if="currentPreview.component" />
    <img
      v-if="currentPreview.image"
      :src="currentPreview.image"
      class="rounded-lg"
      alt="Stormkit Preview"
    />
    <video v-if="currentPreview.video" autoplay :src="currentPreview.video">
      Your browser does not support the video tag.
    </video>
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
  }
}
</script>
