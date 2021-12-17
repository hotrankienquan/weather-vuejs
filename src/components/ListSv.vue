<template>
    <div>
        <div>
            Name:<input type="text" v-model="name">
            MSSV:<input type="text" v-model="mssv">
            Gender: <input type="text" v-model="gender">
            Hobbies:<input type="text" v-model="hobbies">
            
            <button @click="addSinhVien()">Them sinh vien</button>
        </div>
        <div>
            <sv 
                v-for="(member, index) in members"
                :key="index"
                :member="member"
                :deleteSv="deleteSv"
                :index="index"
            />
            
        </div>
    </div>
</template>
<script>
import Sv from './Sv.vue'
export default {
    components: {
        Sv
    },
        methods:{
            addSinhVien(){
                this.members.push({name:this.name});
            },
            deleteSv(index){
                this.members.splice(index,1);
            }
        },
    data(){
        return {
            name: '',
            mssv:'',
            gender:'',
            hobbies:'',
            members:[
                {name: 'kienquan', mssv: '0302', gender: 'Male', hobbies: 'sad music'},
                
            ]
        }
    },

}
</script>
<style scoped>

</style>