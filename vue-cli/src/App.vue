<template>
  <div>
    <LikeHeader>
      <h3>初めまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <pre>{{ eventData.title }}</pre>

      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <pre>{{ eventData.maxNumber }}</pre>

      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>

      <label for="detail">詳細</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 20,
      currentComponent: 'Home',
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: ""
      }
    }
  },
  components: {
    LikeHeader,
    About,
    Home,
  }
}
</script>