<template>
  <a class="button">
    <img src="~/assets/img/Icon/fire.svg" />
    <span>+1</span>
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button {
  background-color: #fada70;
  border-radius: 30px;
  box-shadow: 0 3px 30px 0 rgba(200, 150, 30, 0.15);
  color: #fdfdfd;
  display: flex;
  font-family: 'Nunito', sans-serif;
  font-size: 2.3em;
  height: 60px;
  margin: 0 auto;
  padding: 3px 24px;
  width: 130px;

  img {
    width: 24px;
  }

  span {
    padding: 0 0 0 12px;
  }
}
</style>
