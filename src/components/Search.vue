<template>
  <div>
    <div id="search">
      <h1>day la thanh search</h1>
      {{ name }}
      <button @click="text.textContent = 'xyz'">click</button>
      <div>Text cha truyen vao: {{ text.textContent }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "text"],
  data() {
    return {};
  },
};
</script>
<style  scoped>
input {
  border-radius: 5px;
}
#search {
  border: 1px solid red;
}
</style>