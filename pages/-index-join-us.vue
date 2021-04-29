<template>
  <section
    class="flex flex-col md:flex-row w-full md:max-w-3xl px-3 md:px-0 py-12 m-auto"
  >
    <div class="md:mr-12">
      <h2 class="text-2xl mb-2 font-bold text-center md:text-left px-3 md:px-0">
        Join us and let's build Stormkit together
      </h2>
      <h3 class="text-sm px-3 md:px-0 text-center md:text-left mb-4 md:mb-0">
        Oh by the way, you can start
        <a
          href="https://app.stormkit.io/auth"
          target="_blank"
          rel="noopener noreferrer"
          >building here</a
        >.
      </h3>
    </div>
    <sk-button
      to="https://discord.gg/6yQWhyY"
      tertiary
      class="flex items-center self-center md:self-auto"
    >
      Join our community
    </sk-button>
  </section>
</template>
<script>
import SkButton from '~/components/atoms/Button'

export default {
  components: {
    SkButton
  }
}
</script>
