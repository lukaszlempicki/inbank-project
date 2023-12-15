<template>
  <div class="customer-contact">
    <Transition name="fade" mode="out-in">
      <div key="1" v-if="isSummaryModeOn" class="summary-view">
        <div class="customer-name">{{ name }}</div>
        <div class="customer-contact-details">
          <div class="field">
            <b-icon
              class="field-icon"
              icon="person"
              style="color: #9c9c9c"
              width="16"
              height="16"
            />
            <div class="field-value">{{ id }}</div>
          </div>

          <div class="field">
            <b-icon
              class="field-icon"
              icon="phone"
              style="color: #9c9c9c"
              width="16"
              height="16"
            />
            <div class="field-value">{{ phone }}</div>
          </div>

          <div class="field">
            <b-icon
              class="email"
              icon="envelope"
              style="color: #9c9c9c"
              width="16"
              height="16"
            />
            <div class="field-value">{{ email }}</div>
          </div>
        </div>

        <b-button pill class="btn-edit" @click="showEditMode">
          <b-icon
            icon="pen-fill"
            style="color: var(--primary-color)"
            width="14"
            height="14"
          ></b-icon>
        </b-button>
      </div>
      <div key="2" v-else class="edit-view">
        <div class="customer-name">
          <b-form-input
            v-model="name"
            placeholder="Enter your name"
          ></b-form-input>
        </div>

        <div class="customer-contact-details">
          <label class="section-label">Change your contact Info</label>

          <b-form-group
            label="Phone Number:"
            label-for="phone"
            :state="!$v.phone.$pending && !$v.phone.required"
          >
            <b-form-input
              v-model="phone"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            ></b-form-input>
            <b-form-invalid-feedback id="phone-error" :state="$v.phone.required"
              >Phone number is required</b-form-invalid-feedback
            >
          </b-form-group>

          <!-- Email Field -->
          <b-form-group
            label="Email:"
            label-for="email"
            :state="!$v.email.$pending && !$v.email.email"
          >
            <b-form-input
              v-model="email"
              s
              id="email"
              type="email"
              placeholder="Enter your email"
            ></b-form-input>
            <b-form-invalid-feedback id="email-error" :state="$v.email.email"
              >Enter a valid email address</b-form-invalid-feedback
            >
          </b-form-group>
        </div>
        <b-button pill class="btn-save" @click="showSummaryMode">
          <b-icon
            icon="chevron-right"
            style="color: var(--tertiary-color)"
            width="10"
            height="10"
          ></b-icon>
        </b-button>
      </div>
    </Transition>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "CustomerContact",
  data() {
    return {
      isSummaryModeOn: true,
      name: "Anna Maria Tamm Rodriguez Espinosa",
      id: 38912052254,
      phone: "+372 5289 6572",
      email: "anna.tamm@gmail.com",
    };
  },
  validations: {
    name: { required },
    phone: { required },
    email: { required, email },
  },
  methods: {
    // TODO: move isSummaryModeOn, showSummaryMode, showEditMode to mixin
    showSummaryMode() {
      this.isSummaryModeOn = true;
    },
    showEditMode() {
      this.isSummaryModeOn = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/src/assets/styles/variables.scss";
@import "~/src/assets/styles/animations.scss";

.customer-contact {
  position: relative;
  margin: 22px 0;
  background-color: var(--tertiary-color);
  color: #fdfdfd;
  border-radius: 30px;
  border: 5px solid #f3eefb;
  min-height: 105px;
}

.customer-name {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #413c3c;
  line-height: 28px;
}

.customer-contact-details {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  min-height: 55px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  .section-label {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #413c3c;
  }
}

.field {
  display: flex;
  justify-content: center;
  align-items: center;

  &-value {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #413c3c;
    padding: 0 0 0 6px;
  }
}

.btn-edit {
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
  border: none;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 1px 10px 4px var(--secondary-color);
    cursor: pointer;
  }
}

.btn-save {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: var(--primary-color);
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0px 1px 0px -4px #fff;
  border: none;

  &:hover {
    background-color: var(--primary-color);
    box-shadow: 0px 1px 10px 4px var(--secondary-color);
    cursor: pointer;
  }
}

.form-control {
  outline: none;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #413c3c;
  line-height: 28px;
  border: none;
  box-shadow: none;
  background-color: transparent;

  &:focus {
    border: none;
    box-shadow: none;
    background-color: transparent;
    outline: none;
  }
}
</style>
