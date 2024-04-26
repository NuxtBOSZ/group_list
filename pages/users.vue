<script setup lang="ts">

import UserList from "~/component/UserList.vue";

const selected = ref<any[]>([]);
</script>


<template>
  <div class="flex">
  <UserList class="w-1/2 h-full" v-model:selected="selected"></UserList>
<!--    <div class="w-2/6 flex flex-col items-center justify-center space-y-3">-->
<!--      <div v-if="selected.length == 1" class="flex flex-col items-center">-->
<!--      <UButton>Delete User</UButton>-->
<!--      </div>-->
<!--      <div v-if="selected.length > 0" class="flex flex-col items-center">-->
<!--        <UButton>Add Roles</UButton>-->
<!--      </div>-->
<!--      <div v-if="selected.length > 1" class="flex flex-col items-center">-->
<!--        <UButton>Delete User</UButton>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="w-1/6 flex flex-col items-center space-y-3 h-full overflow-y-scroll">-->
<!--      <div v-for="s in selected" :key="s.name">-->
<!--        <UBadge :label="s.name" variant="outline"/>-->
<!--      </div>-->
<!--    </div>-->
    <UCard class="w-1/2 m-1">
      <template #header>
              <div class="flex space-x-1 overflow-x-scroll p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                <UBadge :label="s.name" v-for="s in selected" :key="s.name" variant="outline"/>
              </div>
      </template>
      <div>
        <p>skm</p>
      </div>
      <template #footer>
        joo
      </template>
    </UCard>
  </div>
</template>

<style scoped>

</style>