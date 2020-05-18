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
          <span class="material-icons text-6xl">
            settings_input_svideo
          </span>
        </div>
        <h2 class="font-bold text-2xl">
          Surprise! We use cookies.
        </h2>
      </header>
      <main class="font-light max-w-2xl text-center mb-8">
        We use cookies to make your experience more delicious. By continuing to
        use Stormkit, you agree to our use of cookies in accordance with our
        <nuxt-link to="/policies/privacy">privacy policy</nuxt-link>.
      </main>
      <footer class="text-center">
        <sk-button secondary @click="closeBanner">Okay, got it</sk-button>
      </footer>
    </div>
  </modal>
</template>
<script>
import Modal from '../atoms/Modal'
import SkButton from '../atoms/Button'

const LOCAL_STORAGE_KEY = 'gdpr-banner-is-closed'

export default {
  components: {
    Modal,
    SkButton
  },
  data() {
    return {
      isBannerOpen: false
    }
  },
  mounted() {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) !== 'true') {
      setTimeout(() => (this.isBannerOpen = true), 1000)
    }
  },
  methods: {
    closeBanner() {
      this.isBannerOpen = false
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
    }
  }
}
</script>
