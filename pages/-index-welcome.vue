<template>
  <div class="flex flex-col-reverse md:flex-row flex-auto md:pb-32 p-3 md:p-0">
    <div
      class="flex flex-auto flex-col justify-center md:max-w-2xl text-center md:text-left"
    >
      <h1 class="text-2xl md:text-4xl leading-tight mb-8 md:mb-4 font-bold">
        Powerful infrastructure for modern javascript apps
      </h1>
      <h2 class="text-l leading-normal">
        Stormkit integrates perfectly with your
        <br />git flow. It builds, deploys and scales <br />
        your javascript apps seamlessly.
      </h2>
      <div class="flex items-center justify-center md:justify-start">
        <sk-button
          css-class="mt-8 text-white border-white bg-pink-50 py-6 md:py-3 font-bold"
        >
          Deploy now for free
        </sk-button>
      </div>
    </div>
    <img
      :src="versionControl"
      class="version-control flex-initial relative my-4 md:my-0 md:max-w-lg"
    />
  </div>
</template>
<script>
import SkButton from '../components/Button'
import versionControl from '../assets/images/content-type.svg'

export default {
  components: {
    SkButton
  },
  data() {
    return {
      versionControl
    }
  }
}
</script>
<style scoped>
.version-control {
  animation: swing 5s infinite;
}

@keyframes swing {
  0% {
    transform: translate(-0.5rem, -0.5rem);
  }
  50% {
    transform: translate(0.1rem, 0.1rem);
  }
  100% {
    transform: translate(-0.5rem, -0.5rem);
  }
}
</style>
