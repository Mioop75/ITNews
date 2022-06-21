<template>
  <div class="registration">
    <div class="container">
      <h2 class="title mb-5">Регистрация</h2>
      <form class="form">
        <div class="mb-3">
          <label for="nickname1" class="form-label">Имя</label>
          <input
            type="text"
            class="form-control"
            id="nickname1"
            aria-describedby="nickname"
            :value="this.$store.state.nickname"
            @input="updateNickname"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            :value="this.$store.state.password"
            @input="updatePassword"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            @change="updateCheckbox"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Проверить меня</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Отправить</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    updateNickname(e) {
      this.$store.commit("updateNickname", e.target.value);
    },

    updatePassword(e) {
      this.$store.commit("updatePassword", e.target.value);
    },
    updateCheckbox(e) {
      this.$store.commit("updateCheckbox", e.target.checked);
    },
  },
};
</script>
<style scoped>
.registration {
  margin-top: 150px;
}
</style>