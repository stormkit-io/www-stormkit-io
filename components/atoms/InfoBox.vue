<template>
  <div
    class="flex items-center rounded border border p-4"
    :class="`bg-${icon.color}-90 border border-${icon.color}-70`"
  >
    <span
      class="bg-blue-90 bg-green-90 bg-red-90 bg-yellow-90 border-blue-70 border-green-70 border-yellow-70 border-red-70 text-blue-70 text-red-70 text-yellow-70 text-green-70"
      ><!-- This is a hack to prevent tailwind treeshaking dynamic classes --></span
    >
    <span class="material-icons mr-4" :class="`text-${icon.color}-70`">{{
      icon.type
    }}</span>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
const icons = {
  info: { type: 'info', color: 'blue' },
  warning: { type: 'warning', color: 'yellow' },
  error: { type: 'error', color: 'red' },
  success: { type: 'check_circle', color: 'green' },
}

export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: 'info',
      validate: (v) => ['success', 'info', 'warning', 'error'],
    },
  },
  computed: {
    icon() {
      return icons[this.theme]
    },
  },
}
</script>
