<template>
  <div class="pep">
    <b-form @submit.prevent="submitForm" v-if="!formSubmitted">
      <b-container>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <!-- Relationship to the PEP-->
            <b-form-group
              label="Relationship to the PEP"
              label-for="country"
              :state="
                !$v.form.relationshipToThePep.$pending &&
                !$v.form.relationshipToThePep.required
              "
              :class="{
                empty: !form.relationshipToThePep,
                filled: form.relationshipToThePep,
              }"
            >
              <b-form-input
                v-model="form.relationshipToThePep"
                id="relationship"
              ></b-form-input>
              <b-form-invalid-feedback
                v-if="!$v.form.relationshipToThePep.required"
                >Value is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="6">
            <!-- PEP region-->
            <b-form-group
              label="PEP region"
              label-for="pepRegion"
              :state="
                !$v.form.pepRegion.$pending && !$v.form.pepRegion.required
              "
              :class="{
                empty: !form.pepRegion,
                filled: form.pepRegion,
              }"
            >
              <b-form-input
                v-model="form.pepRegion"
                id="pepRegion"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.pepRegion.required">
                Value is required
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="12" md="6" lg="6">
            <!-- PEP position -->
            <b-form-group
              label="PEP position"
              label-for="pepPosition"
              :state="
                !$v.form.pepPosition.$pending && !$v.form.pepPosition.required
              "
              :class="{
                empty: !form.pepPosition,
                filled: form.pepPosition,
              }"
            >
              <b-form-input
                v-model="form.pepPosition"
                id="relationship"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.pepPosition.required"
                >Value is required</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="6">
            <!-- Duration as PEP or related to a PEP -->
            <b-form-group
              label="Duration as PEP or related to a PEP"
              label-for="duration"
              :state="!$v.form.duration.$pending && !$v.form.duration.required"
              :class="{
                empty: !form.duration,
                filled: form.duration,
              }"
            >
              <b-form-input
                v-model="form.duration"
                id="pepRegion"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.pepRegion.required">
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
  name: "PEP",
  data() {
    return {
      form: {
        relationshipToThePep: "",
        pepRegion: "",
        pepPosition: "",
        duration: "",
      },
    };
  },
  validations: {
    form: {
      relationshipToThePep: { required },
      pepRegion: { required },
      pepPosition: { required },
      duration: { required },
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
        relationshipToThePep: "",
        pepRegion: "",
        pepPosition: "",
        duration: "",
      };
      this.formSubmitted = false;
      this.$v.$reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.pep {
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
