<template>
  <div class="main">
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="phone"
              placeholder="Phone number"
            />
          </div>
          <div class="mb-3">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUser",
};
</script>

<style>
.main {
  height: 57vh;
  margin: 5%;
}
</style>
