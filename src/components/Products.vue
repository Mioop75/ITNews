<template>
  <section class="products mb-5">
    <div class="container">
      <h2 class="title mb-4">Компликтующие</h2>
      <div class="row gy-4">
        <product-item v-for="product in this.$store.state.products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
<script>
import ProductItem from "@/components/ProductItem";
export default {
  components: {
    ProductItem,
  },
};
</script>
<style scoped lang="scss">
</style>