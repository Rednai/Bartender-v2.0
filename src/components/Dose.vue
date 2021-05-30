<template>
  <div
    class="dose d-flex flex-row items-center"
    :style="{ backgroundColor: color }"
  >
    <img class="logo-dose" :src="require('../assets/icons/' + logo)" />
    <span class="text-dose">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dose",
  props: {
    color: String,
    logo: String,
    text: String,
  },
});
</script>

<style>
.dose {
  color: white;
  width: 300px;
  height: 75px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 7px 0 7px 0;
}
.logo-dose {
  margin-left: 25px;
  width: 60px;
  height: 60px;
}
.text-dose {
  margin: 0 auto;
  font-size: 40px;
}
</style>
