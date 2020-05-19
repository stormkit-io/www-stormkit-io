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
      <sk-why-when />
    </div>
    <div class="mb-12 md:mb-24 md:p-0">
      <sk-supported-techs />
    </div>
    <div class="mb-12 md:mb-24 md:p-0">
      <sk-team />
    </div>
  </div>
</template>

<script>
import SkWelcome from './-index-welcome'
import SkFeatures from './-index-features'
import SkTestimonials from './-index-testimonials'
import SkWhyWhen from './-index-why-when'
import SkSupportedTechs from './-index-supported-techs'
import SkTeam from './-index-team'

export default {
  components: {
    SkWelcome,
    SkFeatures,
    SkTestimonials,
    SkWhyWhen,
    SkSupportedTechs,
    SkTeam
  }
}
</script>
