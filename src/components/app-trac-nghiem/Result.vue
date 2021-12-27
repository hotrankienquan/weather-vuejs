<template>
  <div>
    <h1>
      Ket qua:
      {{
        questions.reduce((total, question) => {
          if (question.correctAnswer == question.answer) {
            total = total + question.point;
          }
          return total;
        }, 0)
      }}
      diem
    </h1>
    <div v-for="(question, index) in questions" :key="index">
      <div>{{ question.content }}</div>
      <div
        v-for="(answer, index) in question.answers"
        :key="index"
        :class="{
          wrong:
            question.answer == index &&
            question.answer != question.correctAnswer,
          correct: question.correctAnswer == index,
        }"
      >
        {{ answer }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["questions"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.correct {
  background-color: green;
}
.wrong {
  background-color: red;
}
</style>