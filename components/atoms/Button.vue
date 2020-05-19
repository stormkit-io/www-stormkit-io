<template>
  <button
    :class="className"
    v-bind="$attrs"
    v-on="$listeners"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    tertiary: { type: Boolean, default: false },
    to: { type: String, default: '' }
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
        'rounded-md',
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

      if (this.tertiary) {
        css.push(
          'text-white',
          'bg-blue-50',
          'hover:bg-white',
          'hover:text-blue-50'
        )
      }

      return css.join(' ')
    }
  },
  methods: {
    handleClick(e) {
      if (this.$listeners.click) {
        return this.$listeners.click(e)
      }

      if (this.to) {
        const a = document.createElement('a')
        a.setAttribute('href', this.to)

        if (this.to[0] !== '/') {
          a.setAttribute('target', '_blank')
          a.setAttribute('rel', 'noreferrer noopener')
        }

        a.click()
      }
    }
  }
}
</script>
