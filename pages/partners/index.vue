<template>
  <div
    class="page px-3 md:px-0 flex flex-col flex-auto items-center justify-center"
  >
    <h1 class="mt-24 mb-3 text-4xl text-center md:text-left">
      Join our partner program
    </h1>
    <h2 class="mb-48 text-lg text-center md:text-left">
      Send us an email at
      <a href="mailto:hello@stormkit.io">hello@stormkit.io</a> and let's discuss
      about oportunities
    </h2>
    <div class="flex flex-col mb-24">
      <h2 class="text-2xl mb-12 text-center md:text-left">
        Here are some really cool partners we already have
      </h2>
      <div class="flex flex-col md:flex-row justify-between">
        <div
          v-for="partner in partners"
          :key="partner.link"
          class="partner flex flex-col shadow bg-white p-12 mb-12 md:mb-0 rounded"
        >
          <div
            class="mb-6 flex items-center justify-center"
            style="min-height: 5rem"
          >
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="w-full"
              :style="`max-width: ${partner.maxWidth}`"
            />
          </div>
          <p class="flex-auto mb-6">
            {{ partner.text }}
          </p>
          <p class="text-right">
            <a
              :href="partner.link"
              rel="noopener noreferrer"
              target="_blank"
              class="inline-flex"
              >Learn more
              <span class="material-icons ml-2"> exit_to_app </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import svgPrimeSystems from '~/assets/images/partners/primesystems-black.svg'
import svgStoryBlok from '~/assets/images/partners/storyblok.svg'
import svgSwissDevJobs from '~/assets/images/partners/swissdevjobs.svg'

export default {
  layout: 'screen',
  data() {
    return {
      partners: [
        {
          logo: svgStoryBlok,
          name: 'StoryBlok',
          text:
            'If you are using Stormkit at some point you will probably need a Headless CMS. Storyblok fills this space extradordinarily well and provides an awesome user experience.',
          link: 'https://www.storyblok.com',
        },
        {
          logo: svgPrimeSystems,
          name: 'Prime Systems',
          text:
            'A digital agency based in Zurich, Switzerland. Creative, wonderful people with whom we grab a few drinks from time to time.',
          link: 'https://www.primesystems.ch/',
        },
        {
          logo: svgSwissDevJobs,
          name: 'SwissDevJobs',
          maxWidth: '3.5rem',
          text:
            'Looking for tech jobs in Switzerland? SwissDev Jobs is probably one of the best places to have a look then. Tailored for developers, by developers.',
          link: 'https://swissdevjobs.ch/jobs/Python/All',
        },
      ],
    }
  },
}
</script>
<style scoped>
@screen md {
  .partner {
    max-width: 32%;
  }
}
</style>
