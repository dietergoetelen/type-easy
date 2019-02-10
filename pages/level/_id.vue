<template>
  <section>
    <page-title>
      <div class="flex justify-between">
        <span>{{ level.name }}</span>
        <timer ref="timer" />
      </div>
    </page-title>

    <div class="container">
      <div
        class="content"
        v-for="(i, index) in level.inputs"
        :key="index"
      >
        <p class="lead">
          <span
            v-for="(input, index) of i"
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
import Timer from "@/components/Timer.vue";
import PageTitle from "@/components/PageTitle.vue";
import levelService from "@/services/level-service";
import { mapActions } from "vuex";

export default {
  components: {
    PageTitle,
    Timer
  },
  asyncData({ redirect, params, store }) {
    const level = store.getters["user-level/level"](+params.id);

    if (!level) {
      return redirect("/");
    }

    return {
      level,
      index: 0,
      currentInput: 0,
      invalidCounter: 0
    };
  },

  mounted() {
    this.$refs.input[this.currentInput].focus();
  },
  methods: {
    ...mapActions({
      addUserLevel: "user-level/add"
    }),
    onType(event) {
      const target = event.target;
      target.innerHTML = "";

      const addAllValid = () => {
        for (let i = 0; i < this.index; i += 1) {
          target.innerHTML += `<span>${
            this.level.inputs[this.currentInput][i].trim()
              ? this.level.inputs[this.currentInput][i]
              : "&nbsp;"
          }</span>`;
        }
      };

      if (this.level.inputs[this.currentInput][this.index] === event.data) {
        this.index += 1;
        addAllValid();
      } else if (typeof event.data === "string") {
        addAllValid();
        this.invalidCounter += 1;
        target.innerHTML += `<span class="text-red">${event.data}</span>`;
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
      if (this.index === this.level.inputs[this.currentInput].length) {
        if (this.$refs.input[++this.currentInput]) {
          this.$refs.input[this.currentInput].focus();
          this.index = 0;
        } else {
          const percentage =
            100 -
            (this.invalidCounter /
              [].concat.apply([], this.level.inputs).length) *
              100;
          this.$refs.timer.stop();

          if (percentage > 80) {
            this.addUserLevel({
              level: +this.$route.params.id,
              time: this.$refs.timer.time,
              percentage: percentage.toFixed(2)
            });
          } else {
            console.log("OEPS NOG EEN KEER!");
          }
        }
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
