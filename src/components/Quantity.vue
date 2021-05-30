<template>
  <div>
    <div class="d-flex flex-row items-center" style="margin-bottom: 10px">
      <img
        class="close"
        :src="require('../assets/icons/close.svg')"
        @click="closeOverlay()"
      />
      <h1 class="drinkName">
        {{ selectedDrink.name }}
      </h1>
    </div>
    <div class="d-flex flex-row">
      <div class="d-flex" style="width: 45%">
        <Drink
          :logo="selectedDrink.logo"
          :color="selectedDrink.color"
          style="margin: auto"
        />
      </div>
      <div class="d-flex flex-col">
        <Dose color="#003483" text="Seigneur" logo="bigDose.png" />
        <Dose color="#0157D9" text="Papa" logo="mediumDose.png" />
        <Dose color="#5490E9" text="Mickey" logo="smallDose.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Drink from "./Drink.vue";
import Dose from "./Dose.vue";

export default Vue.extend({
  name: "Quantity",
  props: {
    selectedDrink: Object,
  },
  components: {
    Drink,
    Dose,
  },
  methods: {
    closeOverlay() {
      this.$emit("closeOverlay");
    },
  },
});
</script>

<style>
.close {
  width: 43px;
  height: 43px;
  margin-left: 15px;
}
.drinkName {
  margin: 0 auto;
}
</style>
