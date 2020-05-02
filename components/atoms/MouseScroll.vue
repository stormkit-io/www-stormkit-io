<template>
  <div class="w-6 h-10 bg-blue-50 rounded-full shadow-lg" v-on="$listeners">
    <div class="scroll w-1 h-3 bg-white rounded-lg m-auto mt-1"></div>
  </div>
</template>
<style scoped>
.scroll {
  animation: scroll 2s infinite;
}

@keyframes scroll {
  from {
    opacity: 0;
    transform: translateY(-0.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(1rem);
  }
}
</style>
