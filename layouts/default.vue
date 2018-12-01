<template>
  <div class="app">
    <section class="app__sidebar">
      <sidebar/>
    </section>

    <div class="app__content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar
  }
}
</script>


<style scoped>
html {
  @apply font-sans;
}

.app {
  @apply flex h-screen;
}

.app__content {
  flex: 1;
}

.app__sidebar {
  width: 250px;
}

</style>
