<template>
  <div class="container fluid">
    <form class="form">
      <div class="mb-3 col-4">
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
        />
      </div>
      <div class="mb-3 col-4">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email address"
        />
      </div>
      <div class="mb-3 col-4">
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="Phone number"
        />
      </div>
      <div class="mb-3 col-4">
        <input
          type="text"
          class="form-control"
          id="website"
          placeholder="Web site"
        />
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddUser",
};
</script>

<style>
.container {
  height: 70vh;
}
.form {
  margin: 5%;
}
.form-control {
  display: inline;
}
</style>
