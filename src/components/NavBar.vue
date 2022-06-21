<template>
  <header class="header">
    <nav class="navbar navbar-dark navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/img/logo.svg" alt="ITNews" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">О нас</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/news">Новости</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >Компликтующие</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registration"
                >Регистрация</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Войти</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style scoped>
.navbar {
  min-height: 100px;
}

.navbar-collapse {
  flex-grow: 0;
}

.nav-link {
  color: #fff;
  font-size: 18px;
  transition: color 0.3s;
}
</style>