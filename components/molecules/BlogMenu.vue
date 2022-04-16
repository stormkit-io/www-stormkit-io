<template>
  <nav
    class="bg-blue-50 p-6 min-h-full md:w-1/4 md:min-w-1/4 md:ml-6 md:mb-6 text-white"
  >
    <div class="text-sm flex-grow md:max-w-1/4 md:min-w-1/4">
      <h3 class="font-bold mb-4 opacity-50">All posts</h3>
      <ul>
        <li v-for="page in pages" :key="page.title" class="mb-2">
          <nuxt-link :to="`/blog/${page.slug}`" class="text-white">{{
            page.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
}
</script>
