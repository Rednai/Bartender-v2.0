<template>
  <div class="d-flex list">
    <Drink
      v-for="drink in drinks"
      :key="drink.name"
      :name="drink.name"
      :logo="drink.logo"
      :color="drink.color"
      @click.native="drinkSelected(drink)"
      style="margin: 20px 35px 20px 35px"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Drink from "./Drink.vue";

export default Vue.extend({
  components: { Drink },
  name: "DrinksList",
  props: {
    drinks: Array,
  },
  methods: {
    drinkSelected(drink: { name: string; logo: string; color: string }) {
      this.$emit("drink-selected", drink);
    },
  },
});
</script>

<style>
.list {
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
</style>
