<template>
  <div>
    <LikeHeader v-slot:default="slotProps">
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h3>初めまして</h3>
      <p>よろしくお願いします</p>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      number: 20
    }
  },
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>