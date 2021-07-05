<template>
  <div class="min-h-screen flex flex-col">
    <sk-header />
    <div class="page flex flex-auto flex-col relative">
      <div
        class="bg flex flex-col-reverse md:flex-row flex-auto items-center md:pb-32 p-3 md:p-0"
      >
        <div
          class="flex flex-auto flex-col md:justify-center md:max-w-2xl text-center md:text-left"
        >
          <h1
            class="text-2xl md:text-4xl mt-12 md:mt-0 leading-tight mb-8 md:mb-4 font-bold"
          >
            Seamlessly build, deploy and scale <br />
            your modern javascript apps
          </h1>
          <h2 class="text-sm md:text-base leading-normal">
            Stormkit helps you easily manage your frontend infrastructure. <br />
            It integrates perfectly with your git flow.
          </h2>
          <div
            class="flex flex-col items-center md:items-start md:justify-start my-6 md:my-0"
          >
            <sk-button
              primary
              class="mt-8 py-6 md:py-3 font-bold"
              to="https://app.stormkit.io/auth"
              >Deploy now for free</sk-button
            >
            <div class="mt-4" style="min-height: 34px">
              <client-only>
                <sk-github-button
                  href="https://github.com/stormkit-io/www-stormkit-io"
                  title="Stormkit GitHub Stars"
                  data-size="large"
                  data-show-count
                  data-text="GitHub Stars"
                  aria-label="Star stormkit-io/www-stormkit-io on GitHub"
                />
                <template #placeholder>
                  <sk-spinner class="bg-pink-50" :width="6" :height="6" />
                </template>
              </client-only>
            </div>
          </div>
        </div>
        <img
          :src="versionControl"
          class="version-control flex-initial relative mt-4 md:mt-0 w-3/4 md:w-full md:max-w-lg"
          alt="Stormkit browser illustration"
        />
        <div class="absolute left-0 right-0 bottom-0 hidden mb-12 md:block">
          <sk-mouse-scroll
            class="m-auto cursor-pointer opacity-75"
            @click="handleScrollDown"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SkGithubButton from '~/components/atoms/GithubButton'
import SkHeader from '~/components/molecules/AppHeader'
import SkButton from '~/components/atoms/Button'
import SkSpinner from '~/components/atoms/Spinner'
import SkMouseScroll from '~/components/atoms/MouseScroll'
import versionControl from '~/assets/images/content-type.svg'

export default {
  components: {
    SkHeader,
    SkMouseScroll,
    SkButton,
    SkSpinner,
    SkGithubButton,
  },
  data() {
    return {
      versionControl,
    }
  },
  methods: {
    handleScrollDown() {
      window.scrollBy(0, window.innerHeight)
    },
  },
}
</script>
<style scoped>
.version-control {
  animation: swing 5s infinite;
}

.spinner {
  animation: circle 1s infinite;
}

@keyframes circle {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
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
