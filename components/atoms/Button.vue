<template>
  <button :class="className" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false }
  },
  computed: {
    className(...args) {
      const css = [
        'inline-block',
        'transition',
        'duration-500',
        'ease-in-out',
        'text-m',
        'px-8',
        'py-2',
        'border',
        'leading-none',
        'rounded-full',
        'text-sm'
      ]

      if (this.primary) {
        css.push('text-white', 'bg-pink-50', 'hover:bg-blue-50')
      }

      if (this.secondary) {
        css.push(
          'text-blue-50',
          'border-blue-50',
          'bg-white',
          'hover:bg-blue-50',
          'hover:text-white'
        )
      }

      return css.join(' ')
    }
  }
}
</script>
