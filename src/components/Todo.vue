<template>
    <!--  moi thz todo la 1 dong, 1 cong viec -->
   <div>
       
           <input type="checkbox"
           @click="list.done = !list.done"
           
           >
           <span
           :class="{checked: list.done}"
           >
                {{list.content}}
                
            
           </span>
           <button href="#"
                @click.prevent="deleteToDo(index)"
                >delete
            </button>
            <button>edit</button>
       
   </div>
</template>
<script>

export default {
    props: ['list', 'deleteToDo', 'index'],
    data(){
        return {
            
        }
    }

}
</script>

<style scoped>
.checked {
    text-decoration: line-through;
}
</style>