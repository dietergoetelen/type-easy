<template>
  <span>Tijd: {{ time }}</span>
</template>

<script>
export default {
  data: () => ({
    time: 0,
    stopped: false
  }),
  mounted() {
    this.start();
  }, 
  methods: {
    start() {
      setTimeout(() => {
        if (!this.stopped) {
          this.time += 1;
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

