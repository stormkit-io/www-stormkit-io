<template>
  <docs :page="page" />
</template>
<script>
import Docs from '~/components/molecules/Docs.vue'

export default {
  components: {
    Docs,
  },

  layout: 'docs',

  async asyncData({ $content, error, params }) {
    const slug = params.pathMatch || 'getting-started'
    const page = await $content(`docs/${slug.replace(/\//g, '--')}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
}
</script>
