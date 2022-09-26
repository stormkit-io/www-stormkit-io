<template>
  <div class="px-3 md:px-0 w-full">
    <div class="flex flex-col md:flex-row bg-white">
      <docs-navigation />
      <div
        class="text-sm leading-relaxed flex flex-grow items-start justify-center"
      >
        <article class="mb-8 p-4 rounded-lg markdown max-w-full md:max-w-3xl">
          <nuxt-content :document="page" tag="main" class="blog-post" />
        </article>
      </div>
    </div>
  </div>
</template>
<script>
import DocsNavigation from './/DocsNavigation.vue'

export default {
  components: {
    DocsNavigation,
  },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
}
</script>
