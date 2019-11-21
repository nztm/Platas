<template>
  <div>
    <Counter />
    <Object />
    <Button />
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue'
import Object from '~/components/Object.vue'
import Button from '~/components/Button.vue'

export default {
  components: {
    Counter,
    Object,
    Button
  }
}
</script>

<style lang="scss">
body {
  background-color: #82d1a7;
}
</style>
