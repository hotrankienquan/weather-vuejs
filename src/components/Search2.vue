<template>
  <div>
    <button @click="search">click</button>
  </div>
</template>
<script>
export default {
  methods: {
    search() {
      this.$emit("search-cha");
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  button {
    color: red;
  }
}
</style>