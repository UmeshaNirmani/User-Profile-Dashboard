<template>
  <container fluid class="nav">
    <h3 class="page-header">Welcome</h3>
  </container>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style>
.nav {
  background-color: #000;
  height: 4em;
  display: flex;
  align-content: center;
}
.page-header {
  color: #fff;
  padding-left: 1em;
}
</style>
