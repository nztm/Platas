<template>
  <div id="feedIn">
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

#feedIn {
  opacity: 0;
  animation: feedIn 0.5s ease 2.5s 1 normal forwards running;
}

@keyframes feedIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
