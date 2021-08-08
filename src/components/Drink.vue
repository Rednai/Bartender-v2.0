<template>
  <div class="drink" :style="{ backgroundColor: color }">
    <span class="helper"></span>
    <img class="logo" :src="require('../data/drinks/' + logo)" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Drink",
  props: {
    logo: String,
    color: String,
    name: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>

<style>
.drink {
  width: 173px;
  height: 173px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  text-align: center;
}
.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.logo {
  max-width: 90%;
  max-height: 90%;
  vertical-align: middle;
}
</style>
