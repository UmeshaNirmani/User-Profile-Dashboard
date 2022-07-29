<template>
  <container fluid class="main">
    <div class="addBtn">
      <router-link to="/add" type="button" class="add btn btn-success"
        >Add User</router-link
      >
    </div>
    <div class="card-group">
      <div class="row">
        <div
          class="card"
          style="width: 18rem"
          v-for="(person, user) in people"
          :key="user"
        >
          <img
            class="card-img-top"
            src="https://avatars.dicebear.com/v2/avataaars/uder.svg?options[mood][]=happy"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5
              class="card-title"
              v-for="(childItem, key) in person"
              :key="key"
            >
              {{ childItem.username }}
            </h5>
            <div class="card-text">
              <i class="fa-solid fa-envelope"> </i>
              <p class="icon" v-for="(childItem, key) in person" :key="key">
                {{ childItem.email }}
              </p>
              <br />

              <i class="fa-solid fa-phone"></i>
              <p class="icon" v-for="(childItem, key) in person" :key="key">
                {{ childItem.phone }}
              </p>
              <br />

              <i class="fa-solid fa-globe"></i>
              <p class="icon" v-for="(childItem, key) in person" :key="key">
                {{ childItem.web }}
              </p>
            </div>
            <hr />
            <p id="card-text">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-pen-to-square"></i>
              <i class="fa-solid fa-trash-can"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      people: [
        [
          { username: "Umesha" },
          { email: "umesha@gmail.com" },
          { phone: "071778899004" },
          { web: "wiki.com" },
        ],
        [
          { username: "Nirmani" },
          { email: "nirmani@gmail.com" },
          { phone: "0717739961" },
          { web: "roopasinghe.com" },
        ],
        [
          { username: "Nirmani" },
          { email: "nirmani@gmail.com" },
          { phone: "0717739961" },
          { web: "roopasinghe.com" },
        ],
        [
          { username: "Nirmani" },
          { email: "nirmani@gmail.com" },
          { phone: "0717739961" },
          { web: "roopasinghe.com" },
        ],
        [
          { username: "Nirmani" },
          { email: "nirmani@gmail.com" },
          { phone: "0717739961" },
          { web: "roopasinghe.com" },
        ],
        [
          { username: "Nirmani" },
          { email: "nirmani@gmail.com" },
          { phone: "0717739961" },
          { web: "roopasinghe.com" },
        ],
      ],
    };
  },
};
</script>

<style>
.addBtn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.card-group {
  padding: 8%;
}
.card {
  margin: 20px;
}
#card-text {
  display: flex;
  justify-content: space-around;
}
.icon {
  display: inline;
}
</style>
