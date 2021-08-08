<template>
  <div>
    <div class="d-flex flex-row items-center" style="margin-bottom: 10px">
      <img
        class="close"
        :src="require('../assets/icons/close.svg')"
        @click="closeOverlay()"
      />
      <h1 class="drink-name">
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
        <Dose
          v-for="(item, index) in quantities"
          :key="index"
          :color="item.color"
          :text="item.name"
          :logo="item.logo"
          @click.native="selectQuantity(item.name)"
        />
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
    selectQuantity(quantity: string) {
      this.$emit("selectQuantity", quantity);
    },
  },
  data() {
    return {
      quantities: [
        { color: "#003483", name: "Seigneur", logo: "bigDose.png" },
        { color: "#0157D9", name: "Papa", logo: "mediumDose.png" },
        { color: "#5490E9", name: "Mickey", logo: "smallDose.png" },
      ],
    };
  },
});
</script>

<style>
.close {
  width: 43px;
  height: 43px;
  margin-left: 15px;
}
.drink-name {
  margin: 0 auto;
}
</style>
