<template>
  <div>
    <div class="background"></div>
    <div class="overlay">
      <component
        :is="scene"
        :selectedDrink="selectedDrink"
        @closeOverlay="closeOverlay"
        @selectQuantity="selectQuantity"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Quantity from "./Quantity.vue";
import Distribution from "./Distribution.vue";
import DistributionFinish from "./DistributionFinish.vue";
import { ipcRenderer } from "electron";

export default Vue.extend({
  name: "Overlay",
  props: {
    selectedDrink: Object,
    closeOverlay: Function,
  },
  components: {
    Quantity,
    Distribution,
    DistributionFinish,
  },
  data() {
    return {
      scene: "Quantity",
    };
  },
  methods: {
    selectQuantity(quantity: string) {
      ipcRenderer.send("distribution", {
        drink: this.selectedDrink,
        quantity: quantity,
      });
      ipcRenderer.on("distribution-finish", () => {
        this.scene = "DistributionFinish";
        setTimeout(() => {
          this.closeOverlay();
          this.scene = "Quantity";
        }, 3000);
      });
      this.scene = "Distribution";
    },
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
