<template>
  <div
    class="flex flex-col justify-center min-h-screen min-w-screen relative overflow-hidden"
  >
    <div class="md:mb-24 md:p-0">
      <sk-welcome />
    </div>
    <div class="mb-12 md:mb-24 md:p-0">
      <sk-features />
    </div>
    <div class="mb-12 md:mb-24 md:p-0">
      <sk-testimonials />
    </div>
    <div class="mb-12 md:mb-24 md:p-0">
      <sk-supported-techs />
    </div>
    <div class="mb-12 md:mb-24 md:p-0">
      <sk-about-us />
    </div>
    <div class="mb-12 md:mb-24 md:p-0">
      <sk-join-us />
    </div>
  </div>
</template>

<script>
import SkWelcome from './-index-welcome'
import SkFeatures from './-index-features'
import SkTestimonials from './-index-testimonials'
import SkAboutUs from './-index-about-us'
import SkSupportedTechs from './-index-supported-techs'
import SkJoinUs from './-index-join-us'

export default {
  components: {
    SkWelcome,
    SkFeatures,
    SkTestimonials,
    SkAboutUs,
    SkSupportedTechs,
    SkJoinUs,
  },
}
</script>
