<template>
  <nav class="flex items-center justify-between flex-wrap text-gray-40">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="flex items-center text-xl font-bold text-black">
        <img :src="skLogoWhite" class="mr-3 w-10" />
        Stormkit
      </span>
    </div>
    <div class="mobile-menu md:hidden">
      <button class="material-icons text-4xl" @click="toggleMenu">
        menu
      </button>
      <div v-if="displayMobileMenu" class="fixed inset-0 z-20 bg-white">
        <div class="text-right p-3">
          <button class="material-icons text-4xl" @click="toggleMenu">
            close
          </button>
        </div>
        <div class="text-sm text-xl pr-12 border-b border-gray-80">
          <a
            v-for="link in links"
            :key="link.path"
            :href="link.path"
            class="block text-gray-40 mb-4 px-4"
            >{{ link.text }}</a
          >
        </div>
        <div class="text-center p-3">
          <a href="https://app.stormkit.io/auth">
            <sk-button secondary>
              Login
            </sk-button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto absolute md:relative inset-0 md:inset-auto hidden md:block"
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
        <a href="https://app.stormkit.io/auth">
          <sk-button secondary>Login</sk-button>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
import skLogoWhite from '../../assets/images/stormkit-logo.svg'
import SkButton from '../atoms/Button'

export default {
  components: {
    SkButton
  },

  data: () => ({
    skLogoWhite,
    displayMobileMenu: false,
    links: [
      { text: 'Docs', path: '/docs' },
      { text: 'Blog', path: '/blog' },
      { text: 'Pricing', path: '/pricing' }
    ]
  }),

  methods: {
    toggleMenu() {
      this.displayMobileMenu = !this.displayMobileMenu
    }
  }
}
</script>
