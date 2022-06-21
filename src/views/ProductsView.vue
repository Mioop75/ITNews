<template>
  <div class="products-wrapper">
    <div class="create-product mb-5" v-if="this.$store.state.authorise == true">
      <div class="container">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              :value="this.$store.state.inputProductImg"
              @input="this.$store.state.inputProductImg = $event.target.value"
              placeholder="Ссылку на картинку..."
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              :value="this.$store.state.inputProductTitle"
              @input="this.$store.state.inputProductTitle = $event.target.value"
              placeholder="Заголовок"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              :value="this.$store.state.inputProductBody"
              @input="this.$store.state.inputProductBody = $event.target.value"
              placeholder="Описание"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="createProduct">
            Создать пост
          </button>
        </form>
      </div>
    </div>
    <products />
  </div>
</template>
<script>
import Products from "@/components/Products";
export default {
  components: {
    Products,
  },

  methods: {
    createProduct(e) {
      this.$store.commit("createProduct");
    },
  },
};
</script>
<style scoped>
.products-wrapper {
  margin-top: 100px;
}

.btn {
  display: block;
  margin: 0 auto;
}
</style>