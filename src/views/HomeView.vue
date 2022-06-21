<template>
  <div class="home">
    <intro />
    <posts /> 
    <products /> 
  </div>
</template>

<script>
// @ is an alias to /src

import Intro from "@/components/Intro";
import Posts from "@/components/Posts";
import Products from "@/components/Products";

export default {
  name: "HomeView",
  components: {
    Intro, Posts, Products
  },
};
</script>
