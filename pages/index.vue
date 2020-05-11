<template>
  <div
    class="flex flex-col justify-center min-h-screen min-w-screen relative overflow-hidden"
  >
    <sk-welcome />
    <div class="page md:mt-24">
      <sk-features />
    </div>
    <div class="md:mb-64 mt-16 md:mt-24">
      <sk-testimonials />
    </div>
  </div>
</template>

<script>
import SkWelcome from './-index-welcome'
import SkFeatures from './-index-features'
import SkTestimonials from './-index-testimonials'

export default {
  components: {
    SkWelcome,
    SkFeatures,
    SkTestimonials
  }
}
</script>
