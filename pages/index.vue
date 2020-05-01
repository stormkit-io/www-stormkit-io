<template>
  <div
    class="flex flex-col justify-center min-h-screen min-w-screen relative overflow-hidden"
  >
    <div
      class="page-header border-b border-gray-80 bg-transparent shadow-sm p-3"
    >
      <sk-header />
    </div>
    <div class="page flex flex-col relative">
      <sk-welcome />
    </div>
    <div class="page mh-auto">
      <sk-features />
    </div>
    <div class="mb-64">
      <sk-testimonials />
    </div>
  </div>
</template>

<script>
import SkHeader from '../components/molecules/AppHeader'
import SkWelcome from './-index-welcome'
import SkFeatures from './-index-features'
import SkTestimonials from './-index-testimonials'

export default {
  components: {
    SkHeader,
    SkWelcome,
    SkFeatures,
    SkTestimonials
  }
}
</script>

<style>
.page-header > nav {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
