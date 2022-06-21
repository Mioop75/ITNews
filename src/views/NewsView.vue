<template>
  <div class="news">
    <div class="create-post mb-5" v-if="this.$store.state.authorise == true">
      <div class="container">
        <form>
          <div class="mb-3">
            <input type="text" class="form-control" :value="this.$store.state.inputPostImg" @input="this.$store.state.inputPostImg = $event.target.value" placeholder="Ссылку на картинку..." />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" :value="this.$store.state.inputPostTitle" @input="this.$store.state.inputPostTitle = $event.target.value" placeholder="Заголовок" />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" :value="this.$store.state.inputPostBody" @input="this.$store.state.inputPostBody = $event.target.value" placeholder="Описание" />
          </div>
          <button type="button" class="btn btn-primary" @click="createPost">Создать пост</button>
        </form>
      </div>
    </div>
    <posts />
  </div>
</template>
<script>
import Posts from "@/components/Posts";

export default {
  components: {
    Posts,
  },
  
  methods: {
    createPost(e) {
      this.$store.commit("createPost")
    }
  },
};
</script>
<style scoped>
.news {
  margin-top: 100px;
}

.btn {
  display: block;
  margin: 0 auto;
}
</style>