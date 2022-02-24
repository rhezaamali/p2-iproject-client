<template>
  <button class="sidebar-button" v-on:click.prevent="fetchMemesDb(category.id)">
    {{ category.name }}
  </button>
</template>

<script>
export default {
  name: "SidebarButton",
  props: ["category"],
  methods: {
    fetchMemesDb(CategoryId) {
      this.$store.dispatch("fetchMemesDb", CategoryId);
    },
  },
};
</script>

<style>
.sidebar-button {
  width: 90%;
  margin-bottom: 20px;
  background-color: black;
  opacity: 80%;
  color: white;
  font-size: 20px;
  border-radius: 5px;
}
</style>
