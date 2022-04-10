<template>
  <div class="md:pt-16 text-blue-50">
    <div class="page px-3 md:px-0">
      <div
        class="flex flex-col md:flex-row bg-white rounded-lg shadow m-auto mt-12"
      >
        <blog-menu :pages="pages" class="md:mt-6" />
        <div class="md:p-6 w-full text-sm leading-relaxed">
          <article
            v-for="page in pages"
            :key="page.title"
            class="mb-8 p-4 bg-gray-90 rounded-lg"
          >
            <h2 class="font-bold text-lg mb-2">
              <nuxt-link :to="`/blog/${page.slug}`" class="text-black">
                {{ page.title }}
              </nuxt-link>
            </h2>
            <div class="mb-2">
              {{ page.description }}
            </div>
            <footer>
              <nuxt-link
                class="inline-flex items-center"
                :to="`/blog/${page.slug}`"
              >
                <span class="material-icons text-xl mr-1">arrow_forward</span>
                Read more</nuxt-link
              >
            </footer>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogMenu from '~/components/molecules/BlogMenu.vue'

export default {
  components: {
    BlogMenu,
  },

  async asyncData({ $content, error }) {
    const pages = await $content('blog')
      .sortBy('updatedAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      pages,
    }
  },
}
</script>
