<template>
  <div
    class="overlay-image-container"
    :class="[{ pointer: $listeners.click }, containerClass]"
    :style="style"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    v-on="$listeners"
  >
    <div
      class="overlay-image-overlay"
      :class="[
        showOverlay ? 'show-overlay' : {
          'from-top': enterFrom === 'top' || enterFrom === null,
          'from-left': enterFrom === 'left',
          'from-right': enterFrom === 'right',
          'from-bottom': enterFrom === 'bottom',
        },
        overlayClass,
      ]"
    >
      <p
        class="overlay-image-text"
        :class="[ textClass ]"
      >
        {{ text || '' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverlayImage',
  props: [
    'image', 'to', 'text', 'height',
    'containerClass', 'overlayClass', 'textClass'
  ],
  data () {
    return {
      enterFrom: null,
      showOverlay: false,
    }
  },
  computed: {
    style () {
      let height
      if (typeof this.height === 'number') {
        height = this.height + 'px'
      } else if (this.height) {
        height = this.height
      }
      const styles = {
        'background-image': `url(${this.image})`,
      }
      if (height) {
        styles.height = height
      }
      return styles
    }
  },
  methods: {
    enteringDirection (e) {
      const rect = this.$el.getBoundingClientRect()
      const x = e.clientX - rect.x
      const y = e.clientY - rect.y
      const top = Math.abs(y)
      const left = Math.abs(x)
      const right = Math.abs(rect.width - x)
      const bottom = Math.abs(rect.height - y)
      const closest = Math.min(top, left, right, bottom)

      switch (closest) {
        case top:
          return 'top'
        case left:
          return 'left'
        case right:
          return 'right'
        case bottom:
          return 'bottom'
        default:
          throw new Error('Invalid closest value')
      }
    },
    mouseenter (e) {
      this.enterFrom = this.enteringDirection(e)
      setTimeout(() => {
        this.showOverlay = true
      }, 10)
    },
    mouseleave (e) {
      this.enterFrom = this.enteringDirection(e)
      this.showOverlay = false
    },
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.overlay-image-container {
  display: flex;
  align-items: stretch;
  background-size: cover;
  overflow: hidden;
}
.overlay-image-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s linear;
  transition-property: top, left, right, bottom;
}
.overlay-image-text {
  font-size: 2.25rem;
  color: #f7fafc;
  font-weight: bold;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .overlay-image-text {
    font-size: 3rem;
  }
}

.show-overlay {
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
}
.from-top {
  top: -100%;
}
.from-left {
  left: -100%;
}
.from-right {
  left: 100%;
}
.from-bottom {
  top: 100%;
}
</style>
