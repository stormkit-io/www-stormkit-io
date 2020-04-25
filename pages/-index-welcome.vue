<template>
  <div class="flex flex-row flex-auto md:pb-32">
    <div class="flex flex-auto flex-col justify-center md:max-w-2xl">
      <h1 class="text-4xl leading-tight mb-4 font-bold mt-12">
        Powerful infrastructure for modern javascript apps
      </h1>
      <h2 class="text-xl leading-normal md:max-w-md">
        Stormkit integrates perfectly with your
        <br />git flow. It builds, deploys and scales <br />
        your javascript apps seamlessly.
      </h2>
      <div class="flex items-center">
        <sk-button css-class="mt-8 text-white border-white bg-pink-50 py-3">
          Deploy now for free
        </sk-button>
      </div>
    </div>
    <img :src="versionControl" class="version-control flex-initial relative" />
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
  right: -3.1rem;
  max-width: 33rem;
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
