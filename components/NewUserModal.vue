<template>
  <modal name="new-user" height="auto">
    <div class="w-full">
      <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Gebruikersnaam
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Gebruikersnaam"
            v-model="user"
          >
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            :class="{disabled: user.length < 3}"
            @click="$emit('close', user)"
          >
            Toevoegen
          </button>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
export default {
  data: () => ({
    user: ''
  })
}
</script>
