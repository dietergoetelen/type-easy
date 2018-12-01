<template>
  <section>
    <page-title>
      <div class="flex justify-between">
        <span>Level abc</span>
        <span>Timer: 123</span>
      </div>
    </page-title>

    <div class="container">
      <div class="content" v-for="i in [1, 2]" :key="i">
        <p class="lead">
          <span
            v-for="(input, index) of inputs"
            :key="index"
          >{{ input }}</span>
        </p>
        <div
          class="input"
          @input="onType"
          @paste.prevent
          @keydown.delete.prevent
          ref="input"
          spellcheck="false"
          contenteditable
        />
      </div>

      <footer class="footer">
        <nuxt-link to="/">&larr; terug naar overzicht</nuxt-link>
      </footer>

    </div>
  </section>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  components: {
    PageTitle
  },
  data() {
    return {
      inputs: [
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k"
      ],
      index: 0,
      currentInput: 0
    };
  },

  mounted() {
    this.$refs.input[this.currentInput].focus();
  },
  methods: {
    test(event) {
      event.stopPropagation();
      event.preventDefault();

      return false;
    },
    onType(event) {
      const target = event.target;
      target.innerHTML = "";

      const addValid = () => {
        for (let i = 0; i < this.index; i += 1) {
          target.innerHTML += `<span>${this.inputs[i].trim() ? this.inputs[i] : '&nbsp;'}</span>`;
        }
      };

      if (this.inputs[this.index] === event.data) {
        this.index += 1;
        addValid();
      } else if (typeof event.data === "string") {
        addValid();
        target.innerHTML += `<span class="text-red">${event.data}</span>`
      }

      const range = document.createRange();
      const spans = target.querySelectorAll("span");

      if (spans.length > 0) {
        range.setStart(spans[spans.length - 1], 1);
        range.setEnd(spans[spans.length - 1], 1);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }

      // check end
      if (this.index === this.inputs.length) {
        if (this.$refs.input[++this.currentInput]) {
          this.$refs.input[this.currentInput].focus()
          this.index = 0;
        };
      }
    }
  }
};
</script>


<style scoped>
.content {
  @apply m-3;
}

.lead {
  letter-spacing: 0.5rem;
  @apply p-2 border border-white;
}

.input {
  letter-spacing: 0.5rem;
  @apply w-full border border-grey-light p-2;
}

.footer a {
  @apply text-blue p-4;
  text-decoration: none;
}
</style>
