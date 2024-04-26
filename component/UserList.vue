<script setup lang="ts">
import {storeToRefs} from "pinia";
import UserListConf from "~/component/modal/UserListConf.vue";

const userStore = useUserStore();
const {clipboard,users,count,pageCount,pagination} = storeToRefs(userStore);
const {fetchUsers} = userStore;

const modal = useModal()

const selected = defineModel<any[]>('selected', {default: []})

const page = ref(1)
const search = ref("")

const columns = [{
  key: 'id',
  label: 'ID',
  sortable: true
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}]
const sort = ref<{ column: "name" | "id" | null ; direction: "desc" | "asc" | null }>({
  column: null,
  direction: null
})

const { pending, error, refresh } = await useAsyncData(
    'fetch',
    ()=>fetchUsers((search.value.length == 0?null:search.value),sort.value.column,sort.value.direction,(pagination.value?pageCount.value:null),(pagination.value?(page.value):null)),
    {
      watch:[page,search,pageCount,pagination,sort],
    }
)

function openModal () {
  modal.open(UserListConf,{
    onClear (){
      selected.value = [];
    },
    onSelect (){
      selected.value = users.value;
    }
  })
}

</script>

<template>
  <div class="">
    <div class="flex justify-between h-[5%]">
      <UButtonGroup class="p-2 flex items-center">
        <UButton @click="openModal()" color="white" icon="i-heroicons:cube-transparent-16-solid"/>
        <UInput v-model.lazy="search" placeholder="Search...">
          <template #trailing>
            <UKbd>Enter</UKbd>
          </template>
        </UInput>
        <UButton icon="i-heroicons:cloud-arrow-down" variant="soft" @click="refresh()" color="blue" />
        <UButton icon="i-heroicons:clipboard-document-list" variant="soft" @click="clipboard = selected" color="green" />
        <UBadge :label="selected.length" size="lg" variant="subtle"/>
      </UButtonGroup>
      <UPagination v-model="page" :disabled="!pagination" :page-count="pageCount" :total="count"/>
    </div>
    <UTable
        v-model="selected"
        :rows="users"
        :columns="columns"
        v-model:sort="sort"

        class="overflow-y-scroll h-[95%]"
    />
  </div>
</template>

<style scoped>

</style>