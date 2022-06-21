<template>
  <section class="posts mb-5">
    <div class="container">
      <h2 class="title mb-4">Новости</h2>
      <div class="row gy-5">
        <post-item v-for="post in this.$store.state.posts" :key="post.id" :post="post"  />
      </div>
    </div>
  </section>
</template>
<script>
import PostItem from "@/components/PostItem"
export default {
  name: "posts",

  components: {
    PostItem
  },
};
</script>
<style scoped>
.row > * {
  display: flex;
}
</style>