<template>
  <nav class="flex items-center justify-between flex-wrap text-gray-40">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="flex items-center text-xl font-bold text-black">
        <img :src="skLogoWhite" class="mr-3 w-10" />
        Stormkit
      </span>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto absolute md:relative inset-0 md:inset-auto"
    >
      <div class="text-sm lg:flex-grow text-right text-base pr-12">
        <a
          v-for="link in links"
          :key="link.path"
          :href="link.path"
          class="inline-block transition duration-500 ease-in-out text-gray-40 hover:text-pink-50 mr-12 border-solid border-b-2 border-blue hover:border-pink-50"
          >{{ link.text }}</a
        >
      </div>
      <div>
        <sk-button css-class="bg-white text-black">Login</sk-button>
      </div>
    </div>
  </nav>
</template>
<script>
import skLogoWhite from '../assets/images/stormkit-logo.svg'
import SkButton from '../components/Button'

export default {
  components: {
    SkButton
  },

  data: () => ({
    skLogoWhite,
    links: [
      { text: 'Docs', path: '/docs' },
      { text: 'Blog', path: '/blog' },
      { text: 'Pricing', path: '/pricing' }
    ]
  })
}
</script>
