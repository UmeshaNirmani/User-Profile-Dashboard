<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img class="spinner" src="../assets/spinner.gif" alt="spinner" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79vh;
}
</style>
