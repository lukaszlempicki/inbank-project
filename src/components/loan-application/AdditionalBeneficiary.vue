<template>
  <div class="additional-beneficiary">
    <b-form @submit.prevent="submitForm" v-if="!formSubmitted">
      <b-container>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <!-- First name-->
            <b-form-group
              label="First name"
              label-for="firstName"
              :state="
                !$v.form.firstName.$pending && !$v.form.firstName.required
              "
              :class="{
                empty: !form.firstName,
                filled: form.firstName,
              }"
            >
              <b-form-input
                v-model="form.firstName"
                id="firstName"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.firstName.required"
                >Value is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="6">
            <!-- Last name-->
            <b-form-group
              label="Last name"
              label-for="lastName"
              :state="!$v.form.lastName.$pending && !$v.form.lastName.required"
              :class="{
                empty: !form.lastName,
                filled: form.lastName,
              }"
            >
              <b-form-input
                v-model="form.lastName"
                id="lastName"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.lastName.required">
                Value is required
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="12" md="6" lg="6">
            <!-- Personal ID code -->
            <b-form-group
              label="Personal ID code"
              label-for="personalIdCode"
              :state="
                !$v.form.personalIdCode.$pending &&
                !$v.form.personalIdCode.required
              "
              :class="{
                empty: !form.personalIdCode,
                filled: form.personalIdCode,
              }"
            >
              <b-form-input
                v-model="form.personalIdCode"
                id="personalIdCode"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.personalIdCode.required"
                >Value is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="6">
            <!-- Residency -->
            <b-form-group
              label="Residency"
              label-for="residency"
              :state="
                !$v.form.residency.$pending && !$v.form.residency.required
              "
              :class="{
                empty: !form.residency,
                filled: form.residency,
              }"
            >
              <b-form-input
                v-model="form.residency"
                id="residency"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.residency.required">
                Value is required
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="12" md="6" lg="6">
            <!-- Birth place -->
            <b-form-group
              label="Birth place"
              label-for="birthPlace"
              :state="
                !$v.form.birthPlace.$pending && !$v.form.birthPlace.required
              "
              :class="{
                empty: !form.birthPlace,
                filled: form.birthPlace,
              }"
            >
              <b-form-input
                v-model="form.birthPlace"
                id="birthPlace"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.birthPlace.required"
                >Value is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="6">
            <!-- Birth date -->
            <b-form-group
              label="Birth date"
              label-for="birthDate"
              :state="
                !$v.form.birthDate.$pending && !$v.form.birthDate.required
              "
              :class="{
                empty: !form.birthDate,
                filled: form.birthDate,
              }"
            >
              <b-form-input
                v-model="form.birthDate"
                id="birthDate"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.birthDate.required">
                Value is required
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "AdditionalBeneficiary",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        personalIdCode: "",
        residency: "",
        birthPlace: "",
        birthDate: "",
      },
    };
  },
  validations: {
    form: {
      firstName: { required },
      lastName: { required },
      personalIdCode: { required },
      residency: { required },
      birthPlace: { required },
      birthDate: { required },
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
        firstName: "",
        lastName: "",
        personalIdCode: "",
        residency: "",
        birthPlace: "",
        birthDate: "",
      };
      this.formSubmitted = false;
      this.$v.$reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.additional-beneficiary {
  margin-top: 22px;
}

.container {
  padding: 0;
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
</style>
