<template>
  <div class="col-lg-6">
    <div
      class="products__card"
      :style="{
        'background-image': `url('${product.img}')`,
      }"
    >
      <h2 class="products-card__title">{{ product.title }}</h2>
      <div class="products-card__content">
        <div class="products-card__desc">
          {{ product.body }}
        </div>
        <a href="#" class="products-card__btn">Подробнее</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-item",

  props: {
    product: {
      type: String,
      reguired: true,
    },
  },
};
</script>
<style scoped lang="scss">
.products__card {
  padding: 60px 18px 37px;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 412px;
  position: relative;
  box-shadow: 9px 12px 9px rgba(0, 0, 0, 0.25);

  &:hover {
    .products-card__content {
      opacity: 1;
      visibility: visible;
    }
  }
}
.products-card {
  &__title {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 16px;
    position: relative;
    z-index: 3;
  }

  &__content {
    background-color: rgba(32, 33, 61, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    padding: 125px 18px 20px;
    transition: all 0.5s;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    border-radius: 20px;
  }

  &__desc {
    max-width: 520px;
    font-size: 14px;
    margin-bottom: 16px;
  }

  &__btn {
    display: inline-block;
    background-color: #3f296e;
    color: #fff;
    padding: 0.4em 1em;
    border-radius: 12px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: lighten(#3f296e, 10%);
    }
  }
}
</style>