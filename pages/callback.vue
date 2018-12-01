<template>
  <div>
    Even geduld
  </div>
</template>

<script>
import auth from '../services/auth-service';

export default {
  async mounted() {
    try {
      await auth.handleAuthentication();
      this.$router.replace('/');
    } catch(err) {
      console.log(err);
      this.$router.replace('/login');
    }
  }
}
</script>

