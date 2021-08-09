<template>
  <div class="d-flex flex-col items-center distribution">
    <img
      class="distribution-icon"
      :src="require('../assets/icons/beerDistributor.png')"
    />
    <div class="distribution-text">Distribution en cours ...</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Distribution",
});
</script>

<style>
.distribution {
  height: 100%;
  justify-content: center;
}
.distribution-icon {
  width: 140px;
  height: 140px;
}
.distribution-text {
  font-size: 25px;
  margin-top: 10px;
}
</style>
