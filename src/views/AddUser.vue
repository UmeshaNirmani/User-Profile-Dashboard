<template>
  <form>
    <div class="mb-3">
      <label for="username" class="col-form-label col-lg-3">Username</label>
      <input type="text" class="col-form-control col-lg-3" id="username" />
    </div>
    <div class="mb-3">
      <label for="email" class="col-form-label col-6">Email address</label>
      <input type="email" class="col-form-control col-6" id="email" />
    </div>
    <div class="mb-3">
      <label for="phone" class="col-form-label col-6">Phone Number</label>
      <input type="number" class="col-form-control col-6" id="phone" />
    </div>
    <p class="mb-3">
      <label for="website" class="col-form-label col-6">Web site</label>
      <input type="text" class="col-form-control col-6" id="website" />
    </p>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AddUser",
};
</script>

<style>
form {
  margin: 5%;
}

.form-control {
  display: inline;
}
</style>
