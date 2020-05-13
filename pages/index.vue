<template>
  <div
    class="flex flex-col justify-center min-h-screen min-w-screen relative overflow-hidden"
  >
    <sk-welcome />
    <div class="page md:mt-24 p-3 md:p-0 ">
      <sk-features />
    </div>
    <div class="mt-16 p-6 md:mt-24 p-3 md:p-0 ">
      <sk-testimonials />
    </div>
    <div class="mb-12 md:my-24 p-6 md:p-0 ">
      <sk-why-when />
    </div>
  </div>
</template>

<script>
import SkWelcome from './-index-welcome'
import SkFeatures from './-index-features'
import SkTestimonials from './-index-testimonials'
import SkWhyWhen from './-index-why-when'

export default {
  components: {
    SkWelcome,
    SkFeatures,
    SkTestimonials,
    SkWhyWhen
  }
}
</script>
