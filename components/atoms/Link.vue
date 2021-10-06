<template>
  <nuxt-link v-if="to" :to="to" v-on="$listeners">
    {{ text }}
  </nuxt-link>
  <a
    v-else
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    v-on="$listeners"
  >
    {{ text }}
  </a>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
