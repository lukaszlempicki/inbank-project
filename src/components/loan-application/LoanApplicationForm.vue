<template>
  <b-form class="loan-application-form">
    Loan application form <br />
    <LoanCalculator />
    <CustomerContact />
    <CustomerPersonalInformation />

    <b-form-checkbox v-model="noPEPInFamily"
      >Neither I nor my family member is PEP</b-form-checkbox
    >
    <PEP v-if="!noPEPInFamily" />

    <b-form-checkbox v-model="isUltimateBeneficiaryCustomer"
      >I’m the ultimate beneficiary
    </b-form-checkbox>

    <AdditionalBeneficiary v-if="isUltimateBeneficiaryCustomer" />

    <template v-if="!noPEPInFamily">
      <b-form-checkbox v-model="isPepCustomer"
        >The beneficial owner is not a PEP
      </b-form-checkbox>

      <PEP v-if="!isPepCustomer" />
    </template>

    <b-button variant="primary">Continue</b-button>
  </b-form>
</template>

<script>
import LoanCalculator from "./LoanCalculator.vue";
import CustomerContact from "./CustomerContact.vue";
import CustomerPersonalInformation from "./CustomerPersonalInformation.vue";
import PEP from "./PEP.vue";
import AdditionalBeneficiary from "./AdditionalBeneficiary.vue";
export default {
  name: "LoanApplicationForm",
  components: {
    LoanCalculator,
    CustomerContact,
    CustomerPersonalInformation,
    PEP,
    AdditionalBeneficiary,
  },
  data() {
    return {
      noPEPInFamily: true,
      isUltimateBeneficiaryCustomer: false,
      isPepCustomer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.loan-application-form {
  margin-top: 22px;
  background-color: #f1f1f1;
}
</style>
