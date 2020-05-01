<template>
  <div
    class="relative shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
    :class="`card-${theme}`"
  >
    <div class="card-content flex-auto">
      <slot></slot>
    </div>
    <div class="flex-grow-0">
      <div
        v-if="image.src"
        class="h-24 card-image absolute flex justify-center w-full z-10 bottom-0"
      >
        <img
          class="w-24 rounded-full overflow-hidden shadow relative z-10"
          :src="image.src"
          :alt="image.alt"
        />
        <svg
          viewBox="0 0 400 100"
          fill="white"
          stroke="none"
          class="w-full absolute z-0"
        >
          <path d="M0,20 C200,150 350,-50 500,50 L500,150 L0,150 Z"></path>
        </svg>
      </div>
      <div
        v-if="shouldDisplayFooter"
        class="card-footer bg-white flex flex-auto items-end"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: { type: Object, default: () => ({}) },
    theme: {
      type: String,
      default: 'primary',
      validator: (v) => ['primary', 'secondary'].includes(v)
    }
  },
  computed: {
    shouldDisplayFooter() {
      return !!this.$slots.footer
    }
  }
}
</script>
<style scoped>
.card-primary .card-content {
  background-image: linear-gradient(
    to right top,
    #f6005c,
    #f71d68,
    #f82d73,
    #f83a7e,
    #f74588
  );
}

.card-image {
  margin-bottom: 4.5rem;
}

.card-footer {
  min-height: 6rem;
}
</style>
