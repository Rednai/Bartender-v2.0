<template>
  <div class="d-flex home">
    <DrinksList
      :drinks="drinks"
      @drink-selected="openOverlay"
      style="margin: auto"
    />
    <Overlay
      :selectedDrink="selectedDrink"
      :closeOverlay="closeOverlay"
      v-if="overlayVisible"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DrinksList from "../components/DrinksList.vue";
import Overlay from "../components/Overlay.vue";
import json from "../data/drinks.json";

export default Vue.extend({
  data: () => {
    return {
      drinks: json,
      selectedDrink: {},
      overlayVisible: false,
    };
  },
  methods: {
    openOverlay(drink: { name: string; logo: string; color: string }) {
      this.selectedDrink = drink;
      this.overlayVisible = true;
    },
    closeOverlay() {
      this.overlayVisible = false;
    },
  },
  components: {
    DrinksList,
    Overlay,
  },
});
</script>

<style>
.home {
  width: 800px;
  height: 480px;
}
</style>
