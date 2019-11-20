<template>
  <div class="counter">
    <h1>成長度</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 35
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  text-align: center;
  margin: 20px;

  h1 {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 3em;
    color: #fdfdfd;
  }

  p {
    font-family: 'Nunito', sans-serif;
    font-size: 4em;
    color: #fdfdfd;
    line-height: 1em;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 2em;
    }

    p {
      font-size: 3em;
    }
  }
}
</style>
