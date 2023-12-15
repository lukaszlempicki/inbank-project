<template>
  <div id="app">
    <PageHeader />
    <PageBody>
      <LoanApplicationForm />
    </PageBody>
  </div>
</template>

<script>
import PageHeader from "./components/layout/PageHeader.vue";
import PageBody from "./components/layout/PageBody.vue";
import LoanApplicationForm from "./components/loan-application/LoanApplicationForm.vue";
export default {
  name: "App",
  components: {
    PageHeader,
    PageBody,
    LoanApplicationForm,
  },
};
</script>
