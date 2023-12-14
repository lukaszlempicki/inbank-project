<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SampleComponent />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SampleComponent from "./components/SampleComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SampleComponent,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
