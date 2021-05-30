<template>
  <div>
    <div class="background"></div>
    <div class="overlay">
      <Quantity :selectedDrink="selectedDrink" @closeOverlay="closeOverlay()" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Quantity from "./Quantity.vue";

export default Vue.extend({
  name: "Overlay",
  props: {
    selectedDrink: Object,
    closeOverlay: Function,
  },
  components: {
    Quantity,
  },
});
</script>

<style>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 600px;
  height: 370px;
  border-radius: 15px;
  background-color: #f8f9fa;
}
</style>
