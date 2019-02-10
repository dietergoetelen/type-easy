<template>
  <div class="app">
    <section class="app__sidebar">
      <sidebar />
    </section>

    <div class="app__content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Sidebar
  },

  computed: {
    ...mapGetters({
      levels: "user-level/levels",
      user: "profile/user"
    })
  },
  mounted() {
    this.setUserLevels(this.user.id);
  },
  methods: {
    ...mapActions({
      setUserLevels: "user-level/setUserLevels"
    })
  }
};
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
