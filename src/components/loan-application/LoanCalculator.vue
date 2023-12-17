<template>
  <div class="loan-calculator" ref="wrapper">
    <Transition name="fade" mode="out-in">
      <div
        key="1"
        class="summary-view"
        v-if="isSummaryModeOn"
        @click="showEditMode"
      >
        <b-icon
          icon="chevron-left"
          style="color: var(--tertiary-color)"
          class="arrow-left"
        ></b-icon>

        <div class="summary-label">Your loan application</div>
        <div class="summary-value">
          <span class="amount">
            {{ this.form.loanAmount }}
            <span class="currency">{{ this.currency }}</span>
          </span>
          /
          <span class="duration">
            {{ this.form.loanDuration }}
            <span class="duration-unit">months</span>
          </span>
        </div>
      </div>
      <div key="2" class="edit-view" v-else>
        <b-form @submit.prevent="submitForm">
          <!-- Loan Amount Field -->
          <b-form-group
            class="edit-amount"
            label="Amount"
            label-for="LoanAmount"
            :state="!$v.form.loanAmount.$pending && $v.form.loanAmount.between"
          >
            <b-input-group>
              <b-form-input
                v-model="form.loanAmount"
                id="LoanAmount"
                type="number"
                min="200"
                max="10000"
                number
                @input="changeValue($event)"
              />
              <template #append>
                <b-input-group-text>
                  <span class="currency-appendinx">€</span>
                </b-input-group-text>

                <b-dropdown text="" variant="primary" class="input-dropdown">
                  <template
                    v-for="(value, index) in arrayRange(200, 10000, 500).concat(
                      [10000]
                    )"
                  >
                    <b-dropdown-item
                      v-bind:key="index"
                      value="value"
                      @click="setLoanAmount(value)"
                    >
                      <span v-if="value === 200" class="message"
                        >Min. allowed</span
                      >
                      <span v-if="value === 10000" class="message"
                        >Max allowed</span
                      >
                      <span class="value">
                        {{ value }}<span class="currency">€</span>
                      </span>
                    </b-dropdown-item>
                  </template>
                </b-dropdown>
              </template>
            </b-input-group>

            <b-form-invalid-feedback
              id="loan-amount-error"
              :state="$v.form.loanAmount.between"
              >Out of range
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- Loan Duration Field -->
          <b-form-group
            class="edit-duration"
            label="Duration"
            label-for="LoanDuration"
            :state="
              !$v.form.loanDuration.$pending && $v.form.loanDuration.between
            "
          >
            <b-input-group>
              <b-form-input
                v-model="form.loanDuration"
                id="LoanDuration"
                type="number"
                :placeholder="`6 - 36 months`"
                min="6"
                max="36"
                number
              />

              <template #append>
                <b-input-group-text>
                  <span class="months-appendinx">months</span>
                </b-input-group-text>

                <b-dropdown text="" variant="primary" class="input-dropdown">
                  <template v-for="(value, index) in arrayRange(6, 37, 3)">
                    <b-dropdown-item
                      v-bind:key="index"
                      value="value"
                      @click="setLoanDuration(value)"
                    >
                      <span v-if="value === 6" class="message"
                        >Min. allowed</span
                      >
                      <span v-if="value === 36" class="message"
                        >Max allowed</span
                      >
                      <span class="value">
                        {{ value }}<span class="period"> months</span>
                      </span>
                    </b-dropdown-item>
                  </template>
                </b-dropdown>
              </template>
            </b-input-group>
            <b-form-invalid-feedback
              id="loan-duration-error"
              :state="$v.form.loanDuration.between"
              >Out of range
            </b-form-invalid-feedback>
          </b-form-group>

          <div class="calculated-loan-installment">
            <span class="label">Monthly Payment</span>
            <span class="value">{{ calculatedLoadInstallment }}</span>
            <span class="currency">{{ this.currency }}</span>
          </div>

          <b-button type="submit" pill class="btn-save" @click="submitForm">
            <b-icon
              icon="chevron-right"
              style="color: var(--primary-color)"
              width="10"
              height="10"
            ></b-icon>
          </b-button>
        </b-form>
      </div>
    </Transition>
  </div>
</template>

<script>
import { required, between, minValue } from "vuelidate/lib/validators";

export default {
  name: "LoanCalculator",
  data() {
    return {
      isSummaryModeOn: true,
      currency: "€",
      form: {
        loanAmount: 2700,
        loanDuration: 36,
      },
    };
  },
  validations: {
    form: {
      loanAmount: {
        min: 200,
        max: 10000,
        required,
        between: between(200, 10000),
        minValue: minValue(200),
      },
      loanDuration: {
        min: 6,
        max: 36,
        required,
        between: between(6, 36),
        minValue: minValue(6),
      },
    },
  },
  computed: {
    calculatedLoadInstallment() {
      return this.form.loanAmount && this.form.loanDuration
        ? Math.round(
            (this.form.loanAmount / this.form.loanDuration) * 1.27 * 100
          ) / 100
        : 0;
    },
    loanAmountOptions() {
      return this.arrayRange(
        this.form.loanAmount.min,
        this.form.loanAmount.max,
        500
      );
    },
  },
  methods: {
    showSummaryMode() {
      this.isSummaryModeOn = true;
    },
    showEditMode() {
      this.isSummaryModeOn = false;
    },
    changeValue(event) {
      console.log("changeValue", event);
    },
    fixLoanCalculatorValues() {
      if (this.form.loanAmount < 200) {
        this.form.loanAmount = 200;
      } else if (this.form.loanAmount > 10000) {
        this.form.loanAmount = 10000;
      }

      if (this.form.loanDuration < 6) {
        this.form.loanDuration = 6;
      } else if (this.form.loanDuration > 36) {
        this.form.loanDuration = 36;
      }
    },
    handleClickOutside(event) {
      const targetElement = this.$refs.wrapper;
      if (!targetElement.contains(event.target)) {
        this.fixLoanCalculatorValues();
      }
    },
    submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // TODO: add EMIT event to pass value to parent component or save in vuex state

      // Close edit mode after submission
      this.showSummaryMode();
    },
    arrayRange(start, stop, step = 1) {
      return Array(Math.ceil((stop - start) / step))
        .fill(start)
        .map((x, y) => x + y * step);
    },
    setLoanAmount(value) {
      this.form.loanAmount = value;
    },
    setLoanDuration(value) {
      this.form.loanDuration = value;
    },
  },
  mounted() {
    // Attach a click event listener to the document
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // Remove the click event listener when the component is about to be destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style lang="scss" scoped>
@import "~/src/assets/styles/variables.scss";
@import "~/src/assets/styles/animations.scss";

.loan-calculator {
  position: relative;
  margin: 22px 0;
  background-color: var(--primary-color);
  color: #fdfdfd;
  border-radius: 30px;
  min-height: 62px;
}

.summary-view,
.edit-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 22px;
  min-height: 58px;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: $breakpoint-lg) {
  }
}

.summary-view {
  &:hover {
    cursor: pointer;
  }
}

.edit-view form {
  flex-direction: column;

  @media screen and (min-width: $breakpoint-md) {
    flex-direction: row;
  }
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

.edit-amount {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-group::v-deep {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  min-width: 162px;

  .form-control:focus {
    box-shadow: none;
  }

  label {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    margin-right: 10px;
    min-width: 56px;
  }

  input[type="number"] {
    background: none;
    font-size: 20px;
    font-weight: 400;
    color: #fdfdfd;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #dedede;
    padding: 0 4px;
    height: calc(100% - 5px);
    min-width: 63px;
    width: auto;
    text-align: center;

    /* Firefox */
    -moz-appearance: textfield;
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:hover {
      border-bottom: 1px solid #fdfdfd;
    }

    @media screen and (min-width: $breakpoint-md) {
      margin-right: 0;
    }
  }

  .invalid-feedback {
    position: absolute;
    bottom: -4px;
    left: 0;
    font-size: 10px;
    font-weight: 300;
  }

  .input-group-text {
    position: absolute;
    top: 0;
    right: 4px;
    background: none;
    border: none;
    color: #fdfdfd;
    font-size: 14px;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }

  .dropdown-toggle,
  .dropdown-toggle:active {
    background-color: transparent;
    border: none;
  }

  .dropdown-item {
    font-weight: 300;
    text-align: center;
  }

  .dropdown-menu {
    padding: 10px;
    box-shadow: 0px 10px 30px 0px #00000005;
    border-radius: 5px;

    li {
      font-size: 16px;

      .dropdown-item {
        padding: 8px 0;
      }

      &:first-of-type,
      &:last-of-type {
        .dropdown-item {
          position: relative;
          text-align: left;
          border-bottom: 1px solid var(--primary-color);
          padding: 12px 0 4px;
          font-weight: 300;
          color: #413c3c;
        }

        .value {
          display: inline-block;
          margin-bottom: 0;
          line-height: 0;
        }
      }
      .message {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 10px;
      }
    }
  }

  &.edit-amount {
    input[type="number"] {
      padding-right: 16px;
    }

    .input-group-text {
      top: 0;
      bottom: auto;
      font-size: 16px;
      left: auto;
      right: 40px;
    }
  }

  &.edit-duration {
    input[type="number"] {
      padding-right: 60px;
    }

    .input-group-text {
      top: auto;
      bottom: 9px;
      font-size: 16px;
      right: 36px;
    }
  }

  &.is-invalid {
    input[type="number"] {
      border-color: var(--validation-error);
    }

    label {
      padding-bottom: 5px;
    }
  }
}

.calculated-loan-installment {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3a156c;
  border-radius: 30px;
  height: 40px;
  min-width: 205px;

  .label {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    color: #dedede;
  }

  .value {
    display: inline-block;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: #fdfdfd;
  }
  .currency {
    bottom: 4px;
  }
}
</style>
