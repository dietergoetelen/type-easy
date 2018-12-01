<template>
  <div class="sidebar">
    <div class="sidebar__title">
      <h2>TYPE EASY</h2>
    </div>
    <nuxt-link to="/" tag="div" class="sidebar__item">
      Start
    </nuxt-link>
    <nuxt-link to="/profiel" tag="div" class="sidebar__item">
      Profiel
    </nuxt-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.sidebar {
  @apply bg-grey-lighter h-full border-r border-grey-light;
}

.sidebar__title {
  @apply flex flex-col justify-center bg-white h-16 border-b border-grey-light;
}

.sidebar__title h2 {
  @apply px-4 font-normal text-blue;
}

.sidebar__item {
  @apply flex flex-col justify-center border-b border-grey-light h-12 px-4 text-grey-dark cursor-pointer;
}

.sidebar__item.nuxt-link-exact-active {
  @apply bg-grey-lightest font-bold;
}
</style>
