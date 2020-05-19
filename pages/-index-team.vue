<template>
  <div id="about-us" class="page px-3 md:px-0">
    <h3 class="mb-12 text-sm text-center font-bold uppercase">
      People behind Stormkit
    </h3>
    <div
      class="flex flex-col md:flex-row md:justify-between w-full pl-12 md:pl-0"
    >
      <div
        v-for="person in people"
        :key="person.name"
        class="flex items-center mb-4 md:mb-0"
      >
        <img
          class="rounded-full w-20 mr-4"
          :src="person.image"
          :alt="person.name"
        />
        <span class="inline-flex text-sm flex-col">
          <span>{{ person.name }}</span>
          <a class="text-xs" :href="person.link" :alt="`${person.name} Social`">
            {{ person.handle }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import jpegSavasVedova from '~/assets/images/team/savas-vedova.jpeg'
import jpegPhilipWels from '~/assets/images/team/philip-wels.jpeg'
import jpegFredEsere from '~/assets/images/team/fred-esere.jpeg'
import jpegChristophMoesli from '~/assets/images/team/christoph-moesli.jpeg'

export default {
  data() {
    return {
      people: [
        {
          image: jpegSavasVedova,
          name: 'Savas Vedova',
          link: 'https://twitter.com/savasvedova',
          handle: '@savasvedova'
        },
        {
          image: jpegPhilipWels,
          name: 'Philip Wels',
          link: 'https://www.linkedin.com/in/philipwels',
          handle: '@philipwels'
        },
        {
          image: jpegFredEsere,
          name: 'Fred Esere',
          link: 'https://www.linkedin.com/in/fredesere',
          handle: '@fredesere'
        },
        {
          image: jpegChristophMoesli,
          name: 'Christoph Moesli',
          link: 'https://www.linkedin.com/in/christoph-moesli/',
          handle: '@christoph-moesli'
        }
      ]
    }
  }
}
</script>
