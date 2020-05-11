<template>
  <nuxt-link
    to="/"
    class="flex items-center font-bold text-black"
    :class="`text-${textSize}`"
  >
    <img :src="skLogoWhite" class="mr-3" :class="`w-${size}`" /> Stormkit
    <slot></slot>
  </nuxt-link>
</template>
<script>
import skLogoWhite from '../../assets/images/stormkit-logo.svg'

export default {
  props: {
    size: { type: Number, default: 10 },
    textSize: { type: String, default: 'xl' }
  },
  data() {
    return {
      skLogoWhite
    }
  }
}
</script>
