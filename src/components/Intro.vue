<template>
  <section class="intro mb-5">
    <div class="container">
      <h1 class="title mb-5">Компьютеры, компликтующие и новости </h1>
      <div class="desc w-75">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, recusandae hic quisquam eveniet expedita, enim iusto minima itaque in ipsa est alias similique amet impedit error deserunt perferendis rem consequuntur?</div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.intro {
  background-image: url("../assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 20% 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.title {
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
}

.desc {
  font-size: 20px;
}
</style>