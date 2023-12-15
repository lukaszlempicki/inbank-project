<template>
  <div class="loan-calculator">
    <div class="summary-view" v-if="isSummaryModeOn" @click="setEditMode">
      <b-icon
        icon="chevron-left"
        style="color: var(--tertiary-color)"
        class="arrow-left"
      ></b-icon>

      <div class="summary-label">Your loan application</div>
      <div class="summary-value">
        <span class="amount">
          {{ this.loanAmount }}
          <span class="currency">{{ this.currency }}</span>
        </span>
        /
        <span class="duration">
          {{ this.loanDuration }} <span class="duration-unit">months</span>
        </span>
      </div>
    </div>
    <div class="edit-view" v-else>
      <b-button pill class="btn-save" @click="setSummaryMode">
        <b-icon
          icon="chevron-right"
          style="color: var(--primary-color)"
          width="10"
          height="10"
        ></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoanCalculator",
  data() {
    return {
      isSummaryModeOn: true,
      loanAmount: 2700,
      currency: "€",
      loanDuration: 36, // in months
    };
  },
  methods: {
    setSummaryMode() {
      this.isSummaryModeOn = true;
    },
    setEditMode() {
      this.isSummaryModeOn = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/src/assets/styles/variables.scss";

.loan-calculator {
  position: relative;
  margin: 22px 0;
  background-color: var(--primary-color);
  color: #fdfdfd;
  border-radius: 30px;

  &:hover {
    cursor: pointer;
  }
}

.summary-view,
.edit-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px;
  height: 58px;
}

.arrow-left {
  position: absolute;
  top: 22px;
  left: 22px;
}

.summary-label {
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  color: #fdfdfd;

  @media screen and (min-width: $breakpoint-lg) {
  }
}

.summary-value {
  display: inline-block;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: #fdfdfd;
  margin-left: 22px;
}

.currency {
  display: inline-block;
  font-size: 12px;
  bottom: 4px;
  position: relative;
}

.duration {
  font-size: 16px;
}

.duration-unit {
  font-size: 14px;
}

.btn-save {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #fff;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0px 1px 0px -4px #fff;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 1px 25px 4px #5948ad;
    cursor: pointer;
  }
}
</style>
