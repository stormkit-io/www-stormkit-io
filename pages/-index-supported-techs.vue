<template>
  <section class="page p-3 md:p-0 flex flex-col md:max-w-2xl">
    <div class="flex-auto">
      <h2 class="text-2xl md:text-3xl mb-4 text-blue-50 font-bold text-center">
        Stormkit is designed to work with these fantastic technologies
      </h2>
      <h3 class="text-center">
        You can build, deploy and publish all these technologies and more - our
        system is designed to support any Node.js or JAMStack application.
      </h3>
    </div>
    <div class="mt-4 md:mt-0 md:p-8 text-center">
      <span
        v-for="(image, i) in images"
        :key="i"
        :style="`animation-delay: ${i * 0.5}s`"
        class="bounce inline-flex items-center justify-center bg-white rounded-full w-20 h-20 shadow border-t border-gray-80 mr-4"
      >
        <img :src="image" class="w-10" />
      </span>
    </div>
    <div class="text-center mt-12">
      <sk-button
        class="inline-flex items-center py-3"
        to="https://app.stormkit.io/auth"
        primary
        >Get started for free</sk-button
      >
    </div>
  </section>
</template>
<script>
import SkButton from '~/components/atoms/Button'
import pngAngular from '~/assets/images/techs/angular.png'
import pngHtml5 from '~/assets/images/techs/html5.png'
import pngJs from '~/assets/images/techs/js.png'
import pngNodeJs from '~/assets/images/techs/nodejs.png'
import pngNextJs from '~/assets/images/techs/next-js.svg'
import pngNuxtJs from '~/assets/images/techs/nuxt.svg'
import pngReact from '~/assets/images/techs/react.png'
import pngVue from '~/assets/images/techs/vue.png'
import pngSvelte from '~/assets/images/techs/svelte.png'

export default {
  components: {
    SkButton
  },
  data() {
    return {
      images: [
        pngAngular,
        pngHtml5,
        pngJs,
        pngNodeJs,
        pngNextJs,
        pngNuxtJs,
        pngReact,
        pngVue,
        pngSvelte
      ]
    }
  }
}
</script>
<style scoped>
.bounce {
  animation: bounce 10s infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
