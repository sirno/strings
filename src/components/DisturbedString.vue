<template>
  <div class="disturbed-string">
    {{ msg }}
  </div>
</template>

<script>
import DisturbedStringProvider from "./providers/DisturbedStringProvider";
export default {
  name: "DisturbedString",
  props: {
    rate: {
      type: Number,
      default: 0.001,
    },
    hangTime: {
      type: Number,
      default: 50,
    },
    letters: {
      type: String,
      default: "abcdefghijklmnopqrstuvwxyz@[]%&/ ",
    },
  },
  methods: {
    reset: function () {
      this.msg = this.text;
    },
    disturb: function () {
      let array = this.text.split("");
      let n = Math.floor(Math.random() * (array.length + 1));
      let sample = this._sample(n, array.length);

      let disturbed = array.map((el, idx) => {
        return idx in sample ? this._select_letter() : el;
      });

      this.msg = disturbed.join("");
      setTimeout(this.reset, this.hangTime);
    },
    _select_letter: function () {
      return this.letters[Math.floor(Math.random() * this.letters.length)];
    },
    _sample: function sample(n, length) {
      let perm = Array(length);
      for (let i = 0; i < length; i++) {
        perm[i] = i;
      }
      for (let i = 0; i < n; i++) {
        let idx = Math.floor(Math.random() * (length - i));
        let swap = perm[i];
        perm[i] = perm[idx];
        perm[idx] = swap;
      }
      return perm.slice(0, n);
    },
  },
  data: function () {
    let text = this.$slots.default[0].text;
    return {
      text: text,
      msg: text,
      length: text.length,
      rateData: this.rate,
    };
  },
  mounted: function () {
    DisturbedStringProvider.register(this);
  },
};
</script>
