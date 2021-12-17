<template>
    <div id="search">
        <h1>day la thanh search</h1>
        <input type="text">
        <div>
           
        </div>
        <button
        @click="showTextCompose()"
        >nut bam
        </button>
    </div>
</template>
<script>

export default {
    props: ['text', 'showTextCompose'],
    data(){
        return {

        }
    }
}
</script>
<style  scoped>
input{
        border-radius: 5px;
}
#search{
    border: 1px solid red;
}
</style>