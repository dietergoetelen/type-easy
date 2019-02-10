<template>
  <span>Tijd: {{ timer }}</span>
</template>

<script>
export default {
  data: () => ({
    timer: 0,
    stopped: false
  }),
  mounted() {
    this.start();
  }, 
  methods: {
    start() {
      setTimeout(() => {
        if (!this.stopped) {
          this.timer += 1;
          this.start();
        }
      }, 1000);
    },
    stop() {
      this.stopped = true;
    }

  }
}
</script>

