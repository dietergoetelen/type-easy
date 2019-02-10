<template>
  <section>

    <page-title>Selecteer niveau</page-title>

    <div class="content container">
      <div class="level-select" v-for="level of levels" :key="level.id">
        <nuxt-link
          tag="div"
          class="inner-level-select"
          :class="{disabled: !level.unlocked}"
          :to="'/level/' + level.id"
        >
          {{ level.name }}
        </nuxt-link>
      </div>
    </div>

  </section>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import levelService from "@/services/level-service";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: "authenticated",
  components: {
    PageTitle
  },
  computed: {
    ...mapGetters({
      levels: "user-level/levels",
    })
  }
};
</script>

<style scoped>
.nav {
  @apply bg-blue-lightest border border-blue-lighter p-3 m-3 text-blue;
}

.nav > h1 {
  @apply font-normal text-3xl;
}

.content {
  @apply flex flex-wrap;
}

.level-select {
  @apply w-1/3;
}

.inner-level-select {
  @apply flex flex-col cursor-pointer m-3 p-3 bg-blue-lightest border border-blue-lighter text-blue text-center h-16 justify-center;
  transition: all 0.3s;
}

.inner-level-select:hover {
  @apply bg-blue-lighter;
}

.inner-level-select.disabled {
  @apply opacity-50 cursor-not-allowed;
}

.inner-level-select.disabled:hover {
  @apply bg-blue-lightest;
}
</style>
