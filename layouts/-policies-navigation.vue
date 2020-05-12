<template>
  <nav class="bg-blue-50 p-6 min-h-full">
    <ul class="text-sm">
      <li v-for="item in items" :key="item.path">
        <span
          class="item block flex w-full items-center text-white py-2 uppercase text-xs font-bold opacity-50"
        >
          {{ item.text }}
        </span>
        <ul v-if="item.children">
          <li v-for="subitem in item.children" :key="subitem.path">
            <nuxt-link
              :to="subitem.path"
              class="subitem block text-white py-2 px-6"
            >
              {{ subitem.text }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Legal',
          children: [
            {
              path: '/policies/terms',
              text: 'Terms'
            },
            {
              path: '/policies/privacy',
              text: 'Privacy Policy'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
.subitem.nuxt-link-exact-active {
  @apply rounded;
  background: rgba(62, 96, 132, 0.5);
}
</style>
