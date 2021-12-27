<template>
  <div>
    <input type="checkbox" />
    <span>{{ todo.content }}</span>
    <button @click="deleteToDo()">delete</button>
  </div>
</template>
<script>
export default {
  props: ["todo", "deleteToDo"],
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>