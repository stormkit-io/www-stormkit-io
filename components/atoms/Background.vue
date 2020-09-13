<template>
  <div
    class="bg overflow-hidden absolute inset-0"
    :class="{
      'top-none': topNone,
      'bottom-none': bottomNone,
      'max-h-screen': !noMaxHeight
    }"
  ></div>
</template>
<script>
export default {
  props: {
    topNone: { type: Boolean, default: false },
    bottomNone: { type: Boolean, default: false },
    noMaxHeight: { type: Boolean, default: false }
  }
}
</script>
<style scoped>
.bg {
  z-index: -1;
}
.bg::before {
  position: absolute;
  left: -60%;
  right: -60%;
  height: 100%;
  content: '';
  z-index: -1;
  border-radius: 50%;
  background-color: #f5f5f5;
}
.top-none.bg::before {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bottom-none.bg::before {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
