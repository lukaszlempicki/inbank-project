<template>
  <div class="loan-calculator">
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

                <!-- <b-dropdown text="Dropdown" variant="outline-secondary">
                <b-dropdown-item>Action C</b-dropdown-item>
                <b-dropdown-item>Action D</b-dropdown-item>
              </b-dropdown> -->
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
            <b-input-group append="months">
              <b-form-input
                v-model="form.loanDuration"
                id="LoanDuration"
                type="number"
                :placeholder="`6 - 36 months`"
                min="6"
                max="36"
                number
              />

              <!-- <template #append>
              <b-dropdown text="Dropdown" variant="outline-secondary">
                <b-dropdown-item>Action C</b-dropdown-item>
                <b-dropdown-item>Action D</b-dropdown-item>
              </b-dropdown>
            </template> -->
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

          <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
          <!-- TODO: Convert to submit button -->
          <b-button pill class="btn-save" @click="showSummaryMode">
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

// TODO: Add selectable values next to input fields by using  Dropdown addons (append + b-dropdown-item)

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
        required,
        between: between(200, 10000),
        minValue: minValue(200),
      },
      loanDuration: {
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
    submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // Close edit mode after submission
      this.showSummaryMode();
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
}

.summary-view,
.edit-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px;
  height: 58px;
  transition: all 0.3s ease-in-out;
}

.summary-view {
  &:hover {
    cursor: pointer;
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
  margin-right: 22px;

  .form-control:focus {
    box-shadow: none;
  }

  label {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    margin-right: 10px;
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
  }

  .invalid-feedback {
    position: absolute;
    bottom: -4px;
    left: -6px;
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

  &.edit-amount {
    input[type="number"] {
      padding-right: 16px;
    }
  }

  &.edit-duration {
    input[type="number"] {
      padding-right: 60px;
    }

    .input-group-text {
      top: auto;
      bottom: 1px;
      font-size: 16px;
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

.fade-enter-active {
  transition: all 0.3s ease-in-out;
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
