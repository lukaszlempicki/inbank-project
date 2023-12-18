<template>
  <b-form class="loan-application-form">
    <LoanCalculator />
    <CustomerContact />
    <CustomerPersonalInformation />

    <div class="reduced-width">
      <b-form-checkbox v-model="noPEPInFamily"
        >Neither I nor my family member is PEP</b-form-checkbox
      >
      <b-icon
        icon="info-circle"
        style="color: var(--primary-color)"
        class="tooltip-icon"
      ></b-icon>
    </div>

    <PEP v-if="!noPEPInFamily" />

    <div class="reduced-width">
      <b-form-checkbox v-model="isUltimateBeneficiaryCustomer"
        >I’m the ultimate beneficiary
      </b-form-checkbox>
      <b-icon
        icon="info-circle"
        style="color: var(--primary-color)"
        class="tooltip-icon"
      ></b-icon>
    </div>

    <AdditionalBeneficiary v-if="isUltimateBeneficiaryCustomer" />

    <template v-if="!noPEPInFamily">
      <div class="reduced-width">
        <b-form-checkbox v-model="isPepCustomer"
          >The beneficial owner is not a PEP
        </b-form-checkbox>
      </div>

      <PEP v-if="!isPepCustomer" />
    </template>

    <div class="reduced-width">
      <b-button variant="primary" class="btn-continue">Continue</b-button>
    </div>
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
  position: relative;
  padding: 22px 0;
}

.reduced-width {
  width: 100%;
  max-width: 372px;
  position: relative;
  margin: 0 auto;
  padding: 22px 0;

  .custom-control {
    width: 100%;
    position: relative;
  }

  .tooltip-icon {
    position: absolute;
    top: 26px;
    right: 0;
  }

  .btn-continue {
    width: 100%;
    background-color: var(--primary-color);
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: #fdfdfd;
  }
}
</style>
