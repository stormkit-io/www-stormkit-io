<template>
  <a
    v-if="isAnchor"
    :class="className"
    :href="to"
    target="_blank"
    rel="noreferrer noopener"
    v-bind="$attrs"
    v-on="$listeners"
    @click="handleClick"
  >
    <slot />
  </a>
  <nuxt-link
    v-else-if="isNuxtLink"
    :class="className"
    :to="to"
    v-bind="$attrs"
    v-on="$listeners"
    @click.native="handleClick"
  >
    <slot />
  </nuxt-link>
  <button
    v-else
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
    to: { type: String, default: null },
  },
  computed: {
    className(...args) {
      const css = [
        'sk-button',
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
        'text-sm',
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
    },

    isAnchor() {
      return this.to && !this.to.startsWith('/')
    },

    isNuxtLink() {
      return this.to && this.to.startsWith('/')
    },
  },
  methods: {
    handleClick(e) {
      if (this.$listeners.click) {
        return this.$listeners.click(e)
      }
    },
  },
}
</script>
