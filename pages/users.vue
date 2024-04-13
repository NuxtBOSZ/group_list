<script setup lang="ts">
import {useTokenStore} from "~/stores/token";
import {storeToRefs} from "pinia";

const tokenStore = useTokenStore();
const {token,urlServer} = storeToRefs(tokenStore);

const par = ref("")

const {data , error , execute}: any = await useFetch(urlServer.value+"user/all?UserSortBy=NAME&PageSize=1&PageNumber=1",{
  headers:{
    Authorization: token.value,
  }
})

</script>

<template>
  <UInput v-model="par"></UInput>
{{data}};
  <UButton @click="execute">send</UButton>
  <p>UserSortBy</p>
  <p>SortOrder</p>
  <p>PageSize</p>
  <p>PageNumber</p>
</template>

<style scoped>

</style>