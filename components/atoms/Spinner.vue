<template>
  <div class="rounded-full" :class="`w-${width} h-${height}`">
    <div class="relative w-full h-full">
      <div
        v-for="n in 2"
        :key="n"
        class="spinner-bounce w-full h-full rounded-full bg-white absolute top-0 left-0"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: { type: Number, required: false, default: 10 },
    height: { type: Number, required: false, default: 10 }
  }
}
</script>
<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

.spinner-bounce {
  opacity: 0.6;
  animation: bounce 2s infinite ease-in-out;
}

.spinner-bounce:last-child {
  animation-delay: -1s;
}
</style>
