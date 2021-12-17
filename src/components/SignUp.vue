<template>
<div>
    <img class="logo" src="../assets/logo.jpg" alt="">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <button>Sign Up</button>
    </div>
</div>
</template>
<script>
export default {
    dat(){
        return {
            name: 'SignUp'
        }
    }
}
</script>
<style scoped>
img.logo {
    width: 100px;
}
img {
    width: 100px;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 30px;
    margin-bottom: 30px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 5px;

}

.register button {
    width: 330px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: white;
    border-radius: 5px;
    cursor: pointer;

}

</style>