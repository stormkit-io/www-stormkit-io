<template>
  <div class="text-sm p-6 min-w-1/4">
    <h3 class="font-bold mb-4">All posts</h3>
    <ul>
      <li v-for="page in pages" :key="page.title" class="mb-2">
        <nuxt-link :to="`/blog/${page.slug}`" class="text-black">{{
          page.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
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
