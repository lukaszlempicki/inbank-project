<template>
  <header class="b-container">
    <b-row class="justify-content-center">
      <b-col sm="12" md="12" lg="10">
        <b-img
          class="logo"
          v-bind="logoProps"
          center
          :src="require('../../../src/assets/images/icons/logo.svg')"
          alt="InBank logo"
        />

        <nav>
          <button type="button" class="dropdown">
            <img
              :src="require('../../../src/assets/images/icons/nav.svg')"
              alt="Dropdown menu icon"
            />
          </button>
        </nav>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      logoProps: {
        width: 47,
        height: 47,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  background-color: transparent;
  text-align: center;
  padding: 22px;
}

nav {
  position: absolute;
  top: 22px;
  right: 22px;
}

.logo {
  border-radius: 100%;
  cursor: pointer;
}

.dropdown {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  height: 47px;
  width: 47px;
}
</style>
