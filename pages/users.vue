<script setup lang="ts">

import UserList from "~/component/UserList.vue";

const selected = ref<any[]>([]);
</script>


<template>
  <div class="flex">
  <UserList class="w-1/2 h-full" v-model:selected="selected"></UserList>
    <div></div>
  </div>
</template>

<style scoped>

</style>