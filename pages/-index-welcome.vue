<template>
  <div
    class="flex flex-col-reverse md:flex-row flex-auto items-center md:pb-32 p-3 md:p-0"
  >
    <div
      class="flex flex-auto flex-col md:justify-center md:max-w-2xl text-center md:text-left"
    >
      <h1
        class="text-2xl md:text-4xl mt-12 md:mt-0 leading-tight mb-8 md:mb-4 font-bold"
      >
        Powerful infrastructure for modern javascript apps
      </h1>
      <h2 class="text-sm md:text-base leading-normal">
        Stormkit integrates perfectly with your git flow. <br />
        It builds, deploys and scales your javascript apps seamlessly.
      </h2>
      <div
        class="flex items-center justify-center md:justify-start my-6 md:my-0"
      >
        <sk-button primary class="mt-8 py-6 md:py-3 font-bold"
          >Deploy now for free</sk-button
        >
      </div>
    </div>
    <img
      :src="versionControl"
      class="version-control flex-initial relative mt-4 md:mt-0 w-3/4 md:w-full md:max-w-lg"
    />
  </div>
</template>
<script>
import SkButton from '../components/atoms/Button'
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
