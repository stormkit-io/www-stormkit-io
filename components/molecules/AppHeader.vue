<template>
  <div
    class="fixed z-9 top-0 w-full bg-gray-90 border-b border-gray-80 shadow-sm p-3"
  >
    <nav
      class="app-header flex items-center justify-between flex-wrap text-gray-40"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <sk-logo />
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
            <nuxt-link
              v-for="link in links"
              :key="link.path"
              :to="link.path"
              class="block text-gray-40 mb-4 px-4"
              @click.native="toggleMenu"
            >
              {{ link.text }}
            </nuxt-link>
          </div>
          <div class="text-center p-3">
            <sk-button secondary to="https://app.stormkit.io/auth">
              Login
            </sk-button>
          </div>
        </div>
      </div>
      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto absolute md:relative inset-0 md:inset-auto hidden md:block"
      >
        <div class="text-sm lg:flex-grow flex justify-end text-right pr-12">
          <nuxt-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="relative navigation-item block transition duration-500 ease-in-out text-blue-50 hover:text-pink-50 mr-2 active-link px-6 py-2 text-sm rounded-md overflow-hidden"
          >
            {{ link.text }}
          </nuxt-link>
        </div>
        <div>
          <a href="">
            <sk-button secondary to="https://app.stormkit.io/auth">
              Login
            </sk-button>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import SkLogo from '../atoms/Logo'
import SkButton from '../atoms/Button'

export default {
  components: {
    SkButton,
    SkLogo,
  },

  data: () => ({
    displayMobileMenu: false,
    links: [
      { text: 'Home', path: '/' },
      { text: 'About us', path: '/#about-us' },
      { text: 'Partners', path: '/partners' },
      { text: 'Docs', path: '/docs' },
      { text: 'Pricing', path: '/pricing' },
    ],
  }),

  methods: {
    toggleMenu() {
      this.displayMobileMenu = !this.displayMobileMenu
    },
  },
}
</script>
<style lang="postcss">
.app-header {
  max-width: 1140px;
  margin: 0 auto;
}
.app-header .navigation-item::before {
  content: '';
  transition: width 200ms ease-in;
  z-index: -1;

  @apply absolute bottom-0 left-0 h-full w-0 bg-white;
}
.app-header .navigation-item:hover::before {
  @apply w-full;
}
</style>
