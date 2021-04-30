<template>
  <div id="about-us" class="relative pt-16">
    <sk-background no-max-height />
    <section class="py-12 page px-3 md:px-0 ">
      <div class="mb-12">
        <div class="page px-3 md:px-0">
          <h2
            class="text-2xl md:text-3xl mb-12 text-blue-50 font-bold text-center"
          >
            People behind Stormkit
          </h2>
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
                <a
                  class="text-xs"
                  :href="person.link"
                  :alt="`${person.name} Social`"
                >
                  {{ person.handle }}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-12">
        <div class="flex flex-col md:flex-row">
          <section
            class="border-t border-gray-80 md:min-w-1/2 bg-white mb-12 md:mb-0 md:mr-4 shadow-lg p-8 rounded-lg"
          >
            <h2
              class="text-3xl mb-4 text-blue-50 font-light border-b border-gray-80"
            >
              <span class="material-icons opacity-50 text-green-50">
                work
              </span>
              Our mission
            </h2>
            <ul class="text-sm mb-4">
              <li class="flex items-center mb-2">
                <span class="material-icons mr-3">
                  navigate_next
                </span>
                Simplify and automate complex processes over the entire life
                cycle of a Javascript application.
              </li>
              <li class="flex items-center mb-2">
                <span class="material-icons mr-3">
                  navigate_next
                </span>
                Make building &amp; delivering applications a delightful
                low-code-like experience.
              </li>
              <li class="flex items-center mb-2">
                <span class="material-icons mr-3">
                  navigate_next
                </span>
                Encourage best practices.
              </li>
              <li class="flex items-center mb-2">
                <span class="material-icons mr-3">
                  navigate_next
                </span>
                Build Stormkit together.
              </li>
              <li class="flex items-center">
                <span class="material-icons mr-3">
                  navigate_next
                </span>
                We don't host applications that spread hatred or violence.
              </li>
            </ul>
            <p class="text-sm text-right">
              <nuxt-link to="/docs#why-stormkit">Why Stormkit?</nuxt-link>
            </p>
          </section>
          <section class="md:min-w-1/2 p-8 flex flex-col">
            <h2
              class="text-3xl mb-4 text-blue-50 font-light border-b border-gray-80"
            >
              <span class="material-icons opacity-50 text-green-50">
                visibility
              </span>
              Our vision
            </h2>
            <ul class="text-sm flex-auto">
              <li class="flex mb-4">
                <b class="mr-4">Why?&nbsp;</b>
                <span
                  >We believe that developers should be able to focus on user
                  problems instead of managing tools, services and
                  infrastructure.
                </span>
              </li>
              <li class="flex mb-4">
                <b class="mr-4">What?</b> We automate your work infrastructure
                 with state of the art best practice and features.
                 This makes Stormkit something like a low-code frontend 
                 infrastructure service for developers.
              </li>
              <li class="flex">
                <b class="mr-4">How?&nbsp;</b> We listen to our users.
              </li>
            </ul>
            <p class="text-sm mt-4 text-right">
              <nuxt-link to="/docs#when-stormkit">When Stormkit?</nuxt-link>
            </p>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import jpegSavasVedova from '~/assets/images/team/savas-vedova.jpeg'
import jpegPhilipWels from '~/assets/images/team/philip-wels.jpeg'
import jpegFredEsere from '~/assets/images/team/fred-esere.jpeg'
import jpegChristophMoesli from '~/assets/images/team/christoph-moesli.jpeg'
import SkBackground from '~/components/atoms/Background'

export default {
  components: {
    SkBackground
  },
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
