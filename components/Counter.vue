<template>
  <div class="counter">
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '成長度'
    }
  },
  computed: {
    count() {
      return this.$store.state.counter.counter.count
    }
  },
  created() {
    this.$store.dispatch('counter/init')
  }
}
</script>

<style lang="scss" scoped>
.counter {
  margin: 20px;
  text-align: center;

  h1 {
    color: #fdfdfd;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 3em;
  }

  p {
    color: #fdfdfd;
    font-family: 'Nunito', sans-serif;
    font-size: 4em;
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
