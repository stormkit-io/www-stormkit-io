<template>
  <div>
    <div
      class="fixed z-9 left-0 top-0 w-screen bg-gray-90 border-b border-gray-80 shadow-sm px-4 py-3"
    >
      <nav
        class="flex items-center justify-between flex-wrap text-gray-40 max-w-screen-2xl m-auto"
      >
        <div class="flex items-center flex-grow mr-6">
          <sk-logo icon-only :size="8" class="mr-4" />
          <sk-link
            v-for="link in links"
            v-bind="link"
            :key="link.to"
            class="text-blue-50 hover:text-pink-50 mr-2 active-link font-bold"
          />
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
            <div class="text-sm pr-12 border-b border-gray-80">
              <sk-link
                v-for="link in links"
                v-bind="link"
                :key="link.to || link.href"
                class="block text-gray-40 mb-4 px-4"
                @click.native="toggleMenu"
              />
            </div>
            <div class="text-center p-3">
              <sk-button secondary to="https://app.stormkit.io/auth">
                Login
              </sk-button>
            </div>
          </div>
        </div>
        <div
          class="w-full flex-shrink-0 lg:flex lg:items-center lg:w-auto absolute md:relative inset-0 md:inset-auto hidden md:block"
        >
          <sk-button secondary to="https://app.stormkit.io/auth">
            Login
          </sk-button>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import SkLogo from '../atoms/Logo'
import SkButton from '../atoms/Button'
import SkLink from '../atoms/Link.vue'

export default {
  components: {
    SkButton,
    SkLogo,
    SkLink,
  },

  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    displayMobileMenu: false,
    links: [{ text: 'Documentation', to: '/docs' }],
  }),

  methods: {
    toggleMenu() {
      this.displayMobileMenu = !this.displayMobileMenu
    },
  },
}
</script>
