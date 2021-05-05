<template>
  <div
    v-if="isOpen || isClosing"
    aria-label="Close the modal"
    class="modal-overlay fixed inset-0 flex justify-center z-50 md:p-6 bg-transparent-30"
    role="button"
    :class="overlayClasses"
    @click="handleClose"
  >
    <div class="modal-content bg-white rounded shadow">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: { type: Boolean, default: false },
    position: {
      type: String,
      default: 'center',
      validator: (value) => ['top', 'bottom', 'center', 'full'].includes(value),
    },
  },
  data() {
    return {
      isClosing: false,
    }
  },
  computed: {
    overlayClasses() {
      const css = {
        closing: this.isClosing,
        'items-center': this.position === 'center',
        'items-end': this.position === 'bottom',
        'items-start': this.position === 'top',
      }

      return css
    },
  },
  watch: {
    isOpen(newValue, oldValue) {
      if (oldValue === true && newValue === false) {
        this.isClosing = true
        setTimeout(() => (this.isClosing = false), 250)
      }
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>
<style scoped>
.modal-overlay {
  opacity: 0;
  animation: show 0.25s ease-in-out forwards;
}

.modal-content {
  opacity: 0;
  transform: translateY(-50%);
  animation: scale-and-show 1s ease-in-out forwards 0.25s;
}

.closing.modal-overlay {
  opacity: 1;
  animation: hide 0.25s ease-in-out forwards;
}

.closing .modal-content {
  opacity: 1;
  transform: translateY(0);
  animation: scale-and-hide 0.25s ease-in-out forwards;
}

@keyframes hide {
  to {
    opacity: 0;
  }
}

@keyframes show {
  to {
    opacity: 1;
  }
}

@keyframes scale-and-show {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-and-hide {
  to {
    opacity: 0;
    transform: translateY(-50%);
  }
}
</style>
