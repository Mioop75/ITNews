<template>
  <div class="wrapper">
    <nav-bar />
    <main class="main">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import AppFooter from "@/components/AppFooter";
export default {
  components: {
    NavBar,
    AppFooter,
  },
};
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

$oswald: "Oswald", sans-serif;
$purple: #3f296e;
$hoverColor: #ff7a28;

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  background-color: #272840;
  color: #fff;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

.main {
  flex: 1 1 auto;
}

.title {
  font-family: $oswald;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
}
</style>
