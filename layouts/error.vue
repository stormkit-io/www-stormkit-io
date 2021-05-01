<template>
  <div
    class="pt-16 page px-3 md:px-0 flex flex-auto items-center justify-center"
  >
    <sk-header />
    <div>
      <h1 class="mt-24 mb-6 text-center text-2xl">
        <span v-if="error.statusCode === 404">
          We're sorry! Nothing found under this url 🥺
        </span>
        <span v-else>
          Something weird happened here 🤔
        </span>
      </h1>
      <h2 class="text-lg max-w-2xl text-center m-auto mb-24">
        <span v-if="error.statusCode === 404">
          Either the page has been removed or it never existed before. You can
          click <nuxt-link to="/">here</nuxt-link> to go back to the home page
          and start over again.
        </span>
        <span v-else>
          Perhaps you can submit a new issue
          <a
            href="https://github.com/stormkit-io/www-stormkit-io/issues/new/choose"
            target="_blank"
            rel="noreferrer noopener"
            >here</a
          >? Otherwise you can click <nuxt-link to="/">here</nuxt-link> to go
          back to the home page.
        </span>
      </h2>
    </div>
  </div>
</template>
<script>
import SkHeader from '~/components/molecules/AppHeader'

export default {
  layout: 'screen',
  components: {
    SkHeader
  },
  props: {
    error: { type: Object, required: true }
  }
}
</script>
