<template>
  <div id="app">
    <PageHeader />
    <PageBody></PageBody>
  </div>
</template>

<script>
import PageHeader from "./components/layout/PageHeader.vue";
import PageBody from "./components/layout/PageBody.vue";
export default {
  name: "App",
  components: {
    PageHeader,
    PageBody,
  },
};
</script>
