<template>
  <button :class="className" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    cssClass: { type: String, default: '' }
  },

  computed: {
    className(...args) {
      return [
        'inline-block',
        'transition',
        'duration-500',
        'ease-in-out',
        'text-m',
        'px-8',
        'py-2',
        'leading-none',
        'border',
        'rounded-full',
        'text-sm',
        'text-white',
        'hover:bg-white',
        'hover:text-pink-50',
        this.cssClass
      ]
        .filter((i) => i)
        .join(' ')
    }
  }
}
</script>
