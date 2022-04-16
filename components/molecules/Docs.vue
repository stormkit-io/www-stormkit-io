<template>
  <div class="text-blue-50">
    <div class="page px-3 md:px-0">
      <div
        class="flex flex-col md:flex-row bg-white rounded-lg shadow m-auto mt-12"
      >
        <docs-navigation class="md:mt-6 md:ml-6 md:mb-6 rounded-sm" />
        <div class="md:p-6 text-sm leading-relaxed md:w-3/4">
          <article class="mb-8 p-4 rounded-lg markdown">
            <nuxt-content :document="page" tag="main" class="blog-post" />
          </article>
        </div>
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
