<template>
    <div>
        <div>
            <input type="text" v-model="newToDo">
            <button @click="addToDo()">Add</button>
        </div>
        <div class="todo">
            <todo
                v-for="(todo, index) in todos"
                v-bind:key="index"
                :list="todo"
                :deleteToDo="deleteToDo"
                :index="index"
            />
            
        </div>
    </div>
</template>
<script>
import Todo from './Todo.vue'
export default {
  components: { Todo },
    methods: {
        addToDo(){
            this.todos.push({content: this.newToDo, done: false});
            this.newToDo = '';
        },
        deleteToDo(index){
            this.todos.splice(index, 1);
        }
    },
    data(){
        return {
            newToDo: '',
            todos: [
                {content: 'nau an ', done: false},
                {content: 'di hoc ', done: false},
            ],
        }
    }
}
</script>
<style scoped>

</style>