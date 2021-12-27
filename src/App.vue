<template>
  <div id="app">
    <div v-show="screen == 'test'">
      <h1>App lam bai trac nghiem</h1>
      <div>
        <question :question="questions[current]" />
        <div>
          <button v-show="current > 0" @click="current--">Prev</button>
          <button v-show="current < questions.length - 1" @click="current++">
            Next
          </button>
          <button
            @click="screen = 'result'"
            v-show="current == questions.length - 1"
          >
            submit
          </button>
        </div>
      </div>
    </div>
    <div v-show="screen == 'result'">
      ket qua
      <result :questions="questions" />
    </div>
  </div>
</template>
<script>
import Question from "./components/app-trac-nghiem/Question.vue";
import Result from "./components/app-trac-nghiem/Result.vue";
export default {
  components: {
    Question,
    Result,
  },
  data() {
    return {
      screen: "test",
      current: 0,
      questions: [
        {
          content: "Viet nam co bao nhieu tinh",
          answers: ["64", "65", "66", "67"],
          correctAnswer: 0,
          point: 0.5,
          answer: null,
        },
        {
          content: "ha noi la thu do nuoc nao",
          answers: ["japan", "viet nam", "lao", "malaysia"],
          correctAnswer: 1,
          point: 0.5,
          answer: null,
        },
        {
          content: "Phu Quoc thuoc tinh nao",
          answers: ["Khanh hoa", "Ca mau", "thanh hoa", "da nang"],
          correctAnswer: 0,
          point: 0.5,
          answer: null,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>