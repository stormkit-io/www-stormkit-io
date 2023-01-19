<template>
  <modal
    :overlay="30"
    :is-open="isBannerOpen"
    position="bottom"
    @close="closeBanner"
  >
    <div class="p-6 md:px-24">
      <header class="flex flex-col items-center mb-4">
        <div class="transform -rotate-45 mb-4">
          <span class="material-icons text-6xl"> settings_input_svideo </span>
        </div>
        <h2 class="font-bold text-2xl">We use cookies.</h2>
      </header>
      <main class="font-light max-w-2xl text-center mb-8">
        We use cookies to make your experience more delicious.
      </main>
      <footer class="text-center">
        <sk-button secondary class="mr-4" @click="removeCookies"
          >Opt-out</sk-button
        >
        <sk-button secondary @click="closeBanner">Accept</sk-button>
      </footer>
    </div>
  </modal>
</template>
<script>
import Modal from '../atoms/Modal'
import SkButton from '../atoms/Button'

const LOCAL_STORAGE_KEY = 'gdpr-banner-is-closed'
const LOCAL_STORAGE_OPT_OUT = 'gdpr-opt-out'

export default {
  components: {
    Modal,
    SkButton,
  },
  data() {
    return {
      isBannerOpen: false,
    }
  },
  mounted() {
    const isOptOut = localStorage.getItem(LOCAL_STORAGE_OPT_OUT) === 'true'
    const isClosed = localStorage.getItem(LOCAL_STORAGE_KEY) === 'true'

    if (!isClosed && !isOptOut) {
      setTimeout(() => (this.isBannerOpen = true), 1000)
    }

    if (isOptOut) {
      this.removeCookies()
    }
  },
  methods: {
    removeCookies() {
      localStorage.setItem(LOCAL_STORAGE_OPT_OUT, 'true')

      document.cookie.split(';').forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, '')
          .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
      })
    },
    closeBanner() {
      this.isBannerOpen = false
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
    },
  },
}
</script>
