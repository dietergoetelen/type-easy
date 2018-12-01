<template>
  <section>

    <page-title>Selecteer niveau</page-title>

    <div class="content container">
      <div class="level-select">
        <nuxt-link tag="div" class="inner-level-select" to="/level/1">
          j k
        </nuxt-link>
      </div>
      <div class="level-select">
        <div class="inner-level-select disabled">
          f g
        </div>
      </div>
      <div class="level-select">
        <div class="inner-level-select disabled">
          d e
        </div>
      </div>
      <div class="level-select">
        <div class="inner-level-select disabled">
          x ;
        </div>
      </div>
      <div class="level-select">
        <div class="inner-level-select disabled">
          l m
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  components: {
    PageTitle
  }
}
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
  transition: all .3s;
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
