<template>
  <div class="customer-personal-information">
    <h2>Personal information</h2>
    <b-form @submit.prevent="submitForm" v-if="!formSubmitted">
      <b-container>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <!-- Country Field -->
            <b-form-group
              label="Country"
              label-for="country"
              :state="!$v.form.country.$pending && !$v.form.country.required"
              :class="{ empty: !form.country, filled: form.country }"
            >
              <b-form-input v-model="form.country" id="country"></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.country.required"
                >Country is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <!-- County Field -->
            <b-form-group
              label="County"
              label-for="county"
              :state="!$v.form.county.$pending && !$v.form.county.required"
              :class="{ empty: !form.county, filled: form.county }"
            >
              <b-form-input v-model="form.county" id="county"></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.county.required"
                >County is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <!-- City/Parish Field -->
            <b-form-group
              label="City / Parish"
              label-for="city"
              :state="!$v.form.city.$pending && !$v.form.city.required"
              :class="{ empty: !form.city, filled: form.city }"
            >
              <b-form-input v-model="form.city" id="city"></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.city.required"
                >City/Parish is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <!-- Township/Village Field -->
            <b-form-group
              label="Township / Village"
              label-for="township"
              :state="!$v.form.township.$pending && !$v.form.township.required"
              :class="{ empty: !form.township, filled: form.township }"
            >
              <b-form-input
                v-model="form.township"
                id="township"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.township.required"
                >Township/Village is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6"
            ><!-- Street Field -->
            <b-form-group
              label="Street"
              label-for="street"
              :state="!$v.form.street.$pending && !$v.form.street.required"
              :class="{ empty: !form.street, filled: form.street }"
            >
              <b-form-input v-model="form.street" id="street"></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.street.required"
                >Street is required</b-form-invalid-feedback
              >
            </b-form-group></b-col
          >
          <b-col sm="12" md="6" lg="6" class="three-in-row">
            <!-- House Field -->
            <b-form-group
              label="House"
              label-for="house"
              :state="!$v.form.house.$pending && !$v.form.house.required"
              :class="{ empty: !form.house, filled: form.house }"
            >
              <b-form-input v-model="form.house" id="house"></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.house.required"
                >House is required</b-form-invalid-feedback
              >
            </b-form-group>

            <!-- Apartment Field -->
            <b-form-group
              label="Apartment"
              label-for="apartment"
              :state="
                !$v.form.apartment.$pending && !$v.form.apartment.required
              "
              :class="{ empty: !form.apartment, filled: form.apartment }"
            >
              <b-form-input
                v-model="form.apartment"
                id="apartment"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.apartment.required"
                >Apartment is required</b-form-invalid-feedback
              >
            </b-form-group>

            <!-- Postal Code Field -->
            <b-form-group
              label="Postal Code"
              label-for="postalCode"
              :state="
                !$v.form.postalCode.$pending && !$v.form.postalCode.required
              "
              :class="{ empty: !form.postalCode, filled: form.postalCode }"
            >
              <b-form-input
                v-model="form.postalCode"
                id="postalCode"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.postalCode.required"
                >Postal Code is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="12" md="12" lg="12">
            <FormSeparator value="Or" />

            <b-form-checkbox
              v-model="isManualModeOn"
              name="check-button"
              :switch="true"
              class="switch"
            >
              Add address manually
            </b-form-checkbox>

            <FormSeparator />
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
// This component has two modes: automatic and manual

import { required } from "vuelidate/lib/validators";
import FormSeparator from "./../ui/FormSeparator.vue";
export default {
  name: "CustomerPersonalInformation",
  components: {
    FormSeparator,
  },
  data() {
    return {
      isManualModeOn: false,
      form: {
        country: "",
        county: "",
        city: "",
        township: "",
        street: "",
        house: "",
        apartment: "",
        postalCode: "",
      },
      formSubmitted: false,
    };
  },
  validations: {
    form: {
      country: { required },
      county: { required },
      city: { required },
      township: { required },
      street: { required },
      house: { required },
      apartment: { required },
      postalCode: { required },
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) return;

      // Simulate form submission logic (you can replace this with your actual logic)
      setTimeout(() => {
        this.formSubmitted = true;
      }, 1000);
    },
    resetForm() {
      this.form = {
        country: "",
        county: "",
        city: "",
        township: "",
        street: "",
        house: "",
        apartment: "",
        postalCode: "",
      };
      this.formSubmitted = false;
      this.$v.$reset();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/src/assets/styles/variables.scss";
@import "~/src/assets/styles/animations.scss";
.customer-personal-information {
  margin-top: 22px;
}

.container {
  padding: 0;
}

.three-in-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-group::v-deep {
    margin-right: 0;
    width: 100%;

    &:last-of-type {
      margin-right: 0;
    }

    @media screen and (min-width: $breakpoint-md) {
      margin-right: 12px;
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    flex-direction: row;
  }
}

h2 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding: 22px;
}

.form-group::v-deep {
  position: relative;
  padding: 8px 0;

  label {
    position: absolute;
    top: -2px;
    left: 14px;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: -0.5px;
    color: #413c3c;
    background-color: #fff;
    padding: 0 6px;
  }

  &.empty {
    label {
      top: 20px;
      left: 12px;
      font-size: 16px;
      color: #413c3c;
      padding: 0 6px;
    }
  }
}

.form-control {
  border-radius: 4px;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border-color: #e9e9e9;
  height: 48px;
  padding: 0 22px;
}

.switch::v-deep {
  display: flex;
  justify-content: center;
  align-items: center;

  .custom-control-input {
    margin-right: 12px;
    width: 24px;
    height: 24px;
    border-radius: 6px;
  }

  .custom-control-label {
    font-size: 14px;
    font-weight: 400;
    color: #413c3c;
  }
}
</style>
