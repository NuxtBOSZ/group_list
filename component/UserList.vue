<script setup lang="ts">
import {storeToRefs} from "pinia";
import UserListConf from "~/component/modal/UserListConf.vue";

const userStore = useUserStore();
const {users,count,pageCount,pagination} = storeToRefs(userStore);
const {fetchUsers} = userStore;

const modal = useModal()

const selected = defineModel<any[]>('selected', {default: []})

const page = ref(1)
const search = ref("")

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name'
}]

const { pending, error, refresh } = await useAsyncData(
    'fetch',
    ()=>fetchUsers((search.value.length == 0?null:search.value),null,null,(pagination.value?pageCount.value:null),(pagination.value?(page.value):null)),
    {
      watch:[page,search,pageCount,pagination],
    }
)

</script>

<template>
  <div class="">
    <div class="flex justify-between h-[5%]">
      <UButtonGroup class="p-2 flex items-center">
        <UButton @click="modal.open(UserListConf)" color="white" icon="i-heroicons:cube-transparent-16-solid"/>
        <UInput v-model.lazy="search" placeholder="Search...">
          <template #trailing>
            <UKbd>Enter</UKbd>
          </template>
        </UInput>
        <UButton icon="i-heroicons:cloud-arrow-down" variant="soft" @click="refresh()" />
      </UButtonGroup>
      <UPagination v-model="page" :disabled="!pagination" :page-count="pageCount" :total="count"/>
    </div>
    <UTable
        v-model="selected"
        :rows="users"
        :columns="columns"

        class="overflow-y-scroll h-[95%]"
    />
  </div>
</template>

<style scoped>

</style>