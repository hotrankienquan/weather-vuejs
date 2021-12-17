<template>
    <div>
        <div>
            <table>
                <tr>
                    <span>Name</span>:<td>{{member.name}}</td>
                    <span>MSSV</span>:<td>{{member.mssv}}</td>
                    <span>Gender</span>:<td>{{member.gender}}</td>
                    <span>Hobbies</span>:<td>{{member.hobbies}}</td>
                </tr>
                    <button @click.prevent="deleteSv(index)">delete</button>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props:['member', 'deleteSv', 'index'],
    data(){
        return {

        }
    }
}
</script>
<style scoped>
/* table{
    width: auto;
} */
span{
    color: red;
    
}

th, td {
  /* padding-top: 10px; */
  /* padding-bottom: 20px; */
  padding-left: 30px;
  padding-right: 40px;
}

/* tr:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}

th:nth-child(even),td:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
} */

</style>