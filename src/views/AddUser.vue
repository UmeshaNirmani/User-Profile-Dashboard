<template>
  <div class="main">
    <div class="row">
      <div class="col-md-4">
        <h3 class="mb-3">Add User</h3>
        <form @submit.prevent="submitCreate()">
          <div class="mb-3">
            <input
              required
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="people.name"
            />
          </div>
          <div class="mb-3">
            <input
              required
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              v-model="people.username"
            />
          </div>
          <div class="mb-3">
            <input
              required
              type="email"
              class="form-control"
              id="email"
              placeholder="Email address"
              v-model="people.email"
            />
          </div>
          <div class="mb-3">
            <input
              required
              type="text"
              class="form-control"
              id="phone"
              placeholder="Phone number"
              v-model="people.phone"
            />
          </div>
          <div class="mb-3">
            <input
              required
              type="text"
              class="form-control"
              id="website"
              placeholder="Web site"
              v-model="people.website"
            />
          </div>
          <div class="button">
            <button type="submit" class="btn btn-success form-btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/users";

export default {
  name: "AddUser",
  data() {
    return {
      people: {
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      },
    };
  },

  methods: {
    submitCreate: async function () {
      try {
        let response = await UserService.createUser(this.people);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/add");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
h3 {
  color: #006600;
  text-align: center;
}
.main {
  height: 57vh;
  margin: 5%;
}
.button {
  display: flex;
  justify-content: center;
}
.form-btn {
  width: 40%;
}
</style>
