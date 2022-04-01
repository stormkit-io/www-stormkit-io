<template>
  <div class="flex items-center justify-center p-8 mb-4">
    <img :src="imgSrc()" :alt="alt" class="article-image" />
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
