<template>
  <div class="login">
    <new-user-modal @close="addUser($event)" />
    <page-title>Selecteer profiel</page-title>

    <div class="login-select">
      <button
        @click="add"
        class="text-3xl"
      >+</button>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import NewUserModal from "@/components/NewUserModal.vue";
export default {
  components: {
    PageTitle,
    NewUserModal
  },
  methods: {
    add() {
      console.log("showing modal");
      this.$modal.show("new-user");
    },
    addUser(username) {
      this.$modal.hide("new-user");
    }
  }
};
</script>

