<template>
  <div class="col-md-5 col-lg-3">
    <div class="card">
      <img
        :src="`${post.img}`"
        class="card-img-top"
        alt="Красивый компьютер с подсветкой"
      />
      <div class="card-body">
        <div class="card-content">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text mb-5">
            {{ post.body }}
          </p>
        </div>
        <a href="#" class="btn">Подробнее</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "post-item",

  props: {
    post: {
      type: String,
      reguired: true,
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  color: #000;
  border: none;
  box-shadow: 21px 18px 28px 1px rgba(0, 0, 0, 0.25);
}

.card-img-top {
  min-height: 250px;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}

.btn {
  background-color: #3f296e;
  color: #fff;
  padding: 0.4em 1em;
  border-radius: 12px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(#3f296e, 10%);
  }
}
</style>