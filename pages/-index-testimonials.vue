<template>
  <div class="text-white relative px-3 md:px-0 md:pb-24">
    <sk-background no-max-height />
    <div class="page mh-auto py-12">
      <h2
        class="text-2xl md:text-3xl mb-12 text-blue-50 font-bold text-center px-12 md:px-0"
      >
        See what our customers say
      </h2>
      <div class="flex flex-col md:flex-row md:justify-between">
        <sk-card
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :image="{ src: testimonial.image, alt: testimonial.name }"
          class="testimonial relative md:w-p-30 mb-6 md:mb-0"
        >
          <div class="p-6 card-content">
            <p class="mb-3 opacity-25">
              <span class="material-icons transform rotate-180">
                format_quote
              </span>
            </p>
            <p class="mb-3 text-sm">
              {{ testimonial.quote }}
            </p>
            <p class="text-right opacity-25">
              <span class="material-icons"> format_quote </span>
            </p>
          </div>
          <template #footer>
            <p
              class="flex items-center justify-between text-sm text-blue-50 py-3 px-6 w-full"
            >
              <span> {{ testimonial.name }}<br />{{ testimonial.title }} </span>
              <span>
                <a
                  v-if="testimonial.linkedin"
                  :href="testimonial.linkedin"
                  target="_blank"
                  rel="noopener referrer"
                >
                  <span class="sr-only">LinkedIn</span>
                  <sk-linkedin class="opacity-75 hover:opacity-100" />
                </a>
              </span>
            </p>
          </template>
        </sk-card>
      </div>
    </div>
  </div>
</template>
<script>
import SkCard from '../components/atoms/Card'
import SkLinkedin from '../components/atoms/social/LinkedIn'
import SkBackground from '../components/atoms/Background'
import jpgSebastienChopin from '../assets/images/testimonials/sebastien-chopin.jpeg'
import jpgJulianDerungs from '../assets/images/testimonials/julian-derungs.jpeg'
import jpgAdamJuras from '../assets/images/testimonials/adam-juras.jpeg'

export default {
  components: {
    SkCard,
    SkLinkedin,
    SkBackground,
  },
  data() {
    return {
      testimonials: [
        {
          name: 'Sébastien Chopin',
          title: 'Founder, Nuxt.js',
          quote:
            'Loved the user experience and built-in Nuxt.js support. Great experience so far, keep up the good work!',
          linkedin: 'https://www.linkedin.com/in/atinux/',
          image: jpgSebastienChopin,
        },
        {
          name: 'Julian Derungs',
          title: 'CEO, Prime Systems',
          quote:
            'Prior to Stormkit we were managing our own Docker workflow. We have saved hundreds of hours per year after the migration.',
          linkedin: 'https://www.linkedin.com/in/julianderungs/',
          image: jpgJulianDerungs,
        },
        {
          name: 'Adam Juras',
          title: 'CTO, tutti.ch',
          quote:
            "I'm impressed how easy we made our custom setup work with Stormkit and improved our developer experience. Good job!",
          linkedin: 'https://www.linkedin.com/in/adamjuras/',
          image: jpgAdamJuras,
        },
      ],
    }
  },
}
</script>
<style scoped>
.testimonial {
  height: 24rem;
}
</style>
