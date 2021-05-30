<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Poppins";
  src: url(./assets/fonts/Poppins-SemiBold.ttf) format("truetype");
}
body {
  background-color: #f8f9fa;
  margin: 0;
}
html,
body,
#app {
  font-family: "Poppins", sans-serif;
}
h1 {
  font-size: 45px;
  margin: 0;
}
.d-flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
</style>
