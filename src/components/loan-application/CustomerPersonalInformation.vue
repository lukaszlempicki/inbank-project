<template>
  <div class="customer-personal-information">
    Customer Personal Information

    <hr />
    Or<br />

    <b-form-checkbox v-model="isManualModeOn" name="check-button" switch>
      Add address manually <b>(Checked: {{ isManualModeOn }})</b>
    </b-form-checkbox>
  </div>
</template>

<script>
// This component has two modes: automatic and manual

export default {
  name: "CustomerPersonalInformation",
  data() {
    return {
      isManualModeOn: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.customer-personal-information {
  margin-top: 22px;
  background-color: #f1f1f1;
}
</style>
