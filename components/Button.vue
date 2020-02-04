<template>
  <div v-if="nowDate !== lastDate">
    <a id="scale" class="button" @click="countUp">
      <img src="~/assets/img/Icon/fire.svg" />
      <span>+1</span>
    </a>
  </div>
  <div v-else>
    <a class="button disabled">
      <img src="~/assets/img/Icon/fire.svg" />
      <span>今日の分は済</span>
    </a>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  computed: {
    nowDate() {
      return dayjs().format('YYYY-MM-DD')
    },
    lastDate() {
      return this.$store.state.date.lastDate.lastDate
    }
  },
  async created() {
    await this.$store.dispatch('date/getUser')
    this.$store.dispatch('date/getDate')
  },
  methods: {
    countUp() {
      this.$store.dispatch('counter/increment')
      this.$store.dispatch('date/setDate')
    }
  }
}
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
  margin: 25px auto;
  padding: 3px 24px;
  width: 130px;

  img {
    width: 24px;
  }

  span {
    padding: 0 0 0 12px;
  }
}

.disabled {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 1.2em;
  padding: 16px 24px;
  width: 200px;
  opacity: 0.7;
}

#scale {
  animation-direction: alternate;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: anim_sc;
  animation-timing-function: ease-in-out;
  transform: scale(1, 1);

  @keyframes anim_sc {
    100% {
      transform: scale(1.1, 1.1);
    }
  }
}
</style>
