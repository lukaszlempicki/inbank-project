<template>
  <div class="separator">
    <hr />
    <div class="value" v-if="value">{{ value }}</div>
  </div>
</template>
<script>
export default {
  name: "FormSeparator",
  props: {
    value: String,
  },
};
</script>
<style scoped>
.separator {
  position: relative;
}

hr {
  border-color: #e9e9e9;
  max-width: 600px;
  margin: 22px auto;
  width: auto;
  text-align: center;
}

.value {
  position: absolute;
  display: block;
  background-color: #fff;
  text-align: center;
  top: -16px;
  left: 0;
  right: 0;
  width: 120px;
  padding: 6px 50px;
  margin: 0 auto;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  color: #dedede;
}
</style>
