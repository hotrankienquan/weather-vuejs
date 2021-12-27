<template>
  <div>
    <div>Cau hoi : {{ question.content }} {{ question.point }} diem</div>
    <div
      v-for="(answer, index) in question.answers"
      :key="index"
      @click="question.answer = index"
      :class="{ selected: question.answer == index }"
    >
      <!-- Question.vue là lọc trong mảng con answers -->
      {{ answer }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["question"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.selected {
  background: blue;
}
</style>