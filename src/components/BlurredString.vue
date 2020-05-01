<template>
  <div class="blurred-string">
    <slot />
    <div id="blur" v-bind:style="styleObject"><slot /></div>
  </div>
</template>

<script>
function randomWalk(scale) {
  return scale * (Math.random() - 0.5);
}
export default {
  name: "BlurredString",
  props: {
    msg: String,
    scale: {
      type: Number,
      default: 0.1,
    },
    walkTime: {
      type: Number,
      default: 20,
    },
    resetTime: {
      type: Number,
      default: 1000,
    },
  },
  computed: {
    styleObject() {
      return {
        transform: "translate(" + this.dx + "px," + this.dy + "px)",
      };
    },
  },
  data: function () {
    return {
      dx: 0,
      dy: 0,
    };
  },
  created: function () {
    setInterval(
      function () {
        this.dx += this.vx;
        this.dy += this.vy;
      }.bind(this),
      this.walkTime
    );
    setInterval(
      function () {
        this.dx = 0;
        this.dy = 0;
        this.vx = randomWalk(this.scale);
        this.vy = randomWalk(this.scale);
      }.bind(this),
      this.resetTime
    );
  },
};
</script>

<style scoped>
.blurred-string {
  position: relative;
}
#blur {
  display: block;
  position: absolute;
  top: 0%;
  width: 100%;
}
</style>
