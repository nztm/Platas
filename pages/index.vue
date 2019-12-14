<template>
  <div>
    <Counter />
    <Object />
    <Button />
  </div>
</template>

<script>
// Components
import Counter from '~/components/Counter.vue'
import Object from '~/components/Object.vue'
import Button from '~/components/Button.vue'

// Plugins
import firebase from '~/plugins/firebase'

export default {
  components: {
    Counter,
    Object,
    Button
  },
  created() {
    firebase.auth().signInAnonymously()
  }
}
</script>

<style lang="scss">
body {
  background-color: #82d1a7;
  user-select: none;
}
</style>
