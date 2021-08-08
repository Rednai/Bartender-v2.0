<template>
  <div class="d-flex flex-col items-center distribution-finish">
    <img
      class="distribution-finish-icon"
      :src="require('../assets/icons/beer.png')"
    />
    <div class="distribution-finish-text">Distribution terminée</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DistributionFinish",
});
</script>

<style>
.distribution-finish {
  height: 100%;
  justify-content: center;
}
.distribution-finish-icon {
  width: 140px;
  height: 140px;
}
.distribution-finish-text {
  font-size: 25px;
  margin-top: 10px;
}
</style>
