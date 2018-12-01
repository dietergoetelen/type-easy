<template>
  <div class="login">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import authService from '../services/auth-service'
export default {
  methods: {
    login() {
      authService.login();
    }
  }
}
</script>

