<template>
  <div>
    <div>
      <input type="text" v-model="newTodo" />
      <button @click="addToDo()">add to do</button>
    </div>
    <div>
      <Todo
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :deleteToDo="deleteToDo"
      />
    </div>
  </div>
</template>
<script>
import Todo from "./Todo.vue";
export default {
  data() {
    return {
      newTodo: "",
      todos: [
        // { content: "hoc js", done: true },
        // { content: "hoc vuejs", done: false },
      ],
    };
  },
  methods: {
    addToDo() {
      this.todos.push({ content: this.newTodo, done: false });
      this.newTodo = "";
    },
    deleteToDo(index) {
      this.todos.splice(index, 1);
    },
  },
  components: {
    Todo,
  },
};
</script>
<style scoped>
</style>