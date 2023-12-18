<template>
  <b-form class="loan-application-form">
    <LoanCalculator />
    <CustomerContact />
    <CustomerPersonalInformation />

    <div class="reduced-width">
      <b-form-checkbox v-model="noPEPInFamily"
        >Neither I nor my family member is PEP</b-form-checkbox
      >

      <b-button v-b-modal.modal-1 class="tooltip-button">
        <b-icon icon="info-circle" style="color: var(--primary-color)"></b-icon>
      </b-button>

      <b-modal id="modal-1" centered cancel-disabled ok-disabled title="PEP">
        <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <b-button size="sm" variant="default" @click="close()" class="close">
            <b-img
              class="logo"
              center
              :src="require('../../../src/assets/images/icons/close.svg')"
              alt="InBank logo"
            />
          </b-button>
          <h5>PEP</h5>
        </template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </b-modal>
    </div>

    <PEP v-if="!noPEPInFamily" />

    <div class="reduced-width">
      <b-form-checkbox v-model="isUltimateBeneficiaryCustomer"
        >I’m the ultimate beneficiary
      </b-form-checkbox>

      <b-button v-b-modal.modal-2 class="tooltip-button">
        <b-icon icon="info-circle" style="color: var(--primary-color)"></b-icon>
      </b-button>

      <b-modal
        id="modal-2"
        centered
        cancel-disabled
        ok-disabled
        title="Ultimate Beneficiary"
      >
        <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <b-button size="sm" variant="default" @click="close()" class="close">
            <b-img
              class="logo"
              center
              :src="require('../../../src/assets/images/icons/close.svg')"
              alt="InBank logo"
            />
          </b-button>
          <h5>Ultimate Beneficiary</h5>
        </template>
        <p class="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </b-modal>
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
      <b-button type="button" variant="primary" class="btn-continue"
        >Continue</b-button
      >
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

  .tooltip-button {
    position: absolute;
    right: 0;
    background-color: transparent;
    border: none;
    width: 32px;
    height: 32px;
    padding: 0;
    margin: 0;
    top: 16px;
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
