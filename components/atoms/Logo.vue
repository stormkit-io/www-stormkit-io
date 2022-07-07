<template>
  <nuxt-link to="/" class="flex items-center font-bold">
    <span class="tailwind-safe-list-hack w-28 hidden"></span>
    <img :src="skLogo" :class="`w-${size}`" alt="Stormkit Logo" />
  </nuxt-link>
</template>
<script>
import skLogoText from '../../assets/logos/stormkit-logo-text-h.svg'
import skLogoCircle from '../../assets/logos/stormkit-logo-circle.svg'

export default {
  props: {
    size: { type: Number, default: 28 },
    iconOnly: { type: Boolean, default: false },
  },
  data() {
    return {
      skLogo: this.iconOnly ? skLogoCircle : skLogoText,
    }
  },
}
</script>
