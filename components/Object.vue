<template>
  <div class="object">
    <div v-if="$store.state.counter.counter.count < 10">
      <img src="~/assets/img/Object/v1.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 20">
      <img src="~/assets/img/Object/v2.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 30">
      <img src="~/assets/img/Object/v3.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 40">
      <img src="~/assets/img/Object/v4.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 50">
      <img src="~/assets/img/Object/v5.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 60">
      <img src="~/assets/img/Object/v6.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 70">
      <img src="~/assets/img/Object/v7.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 80">
      <img src="~/assets/img/Object/v8.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 90">
      <img src="~/assets/img/Object/v9.svg" />
    </div>

    <div v-else-if="$store.state.counter.counter.count < 9999">
      <img src="~/assets/img/Object/v10.svg" />
    </div>

    <div v-else></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.object {
  background-color: #a6e2ed;
  border-radius: 30px;
  box-shadow: 0 3px 30px 0 rgba(0, 120, 245, 0.15);
  height: 550px;
  margin: 20px auto;
  position: relative;
  width: 550px;

  img {
    bottom: 0;
    height: 500px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 500px;
  }
}

@media screen and (max-width: 1000px) {
  .object {
    height: 500px;
    width: 500px;

    img {
      height: 450px;
      width: 450px;
    }
  }
}
@media screen and (max-width: 768px) {
  .object {
    height: 400px;
    width: 400px;

    img {
      height: 350px;
      width: 350px;
    }
  }
}
@media screen and (max-width: 480px) {
  .object {
    height: 300px;
    width: 300px;
  }

  img {
    height: 250px;
    width: 250px;
  }
}
@media screen and (max-width: 320px) {
  .object {
    height: 250px;
    width: 250px;

    img {
      height: 200px;
      width: 200px;
    }
  }
}
</style>
