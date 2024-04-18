<script setup lang="ts">
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const {pageCount,pagination} = storeToRefs(userStore);

</script>

<template>
  <UModal>
    <UCard>
      <template #header>
        <div class="flex justify-between items-center p-2">
          <p>User List Conf</p>
          <UIcon name="i-heroicons:cube-transparent-16-solid" />
        </div>
      </template>
      <div class="flex flex-col space-y-2">
      <UButtonGroup>
        <UBadge label="Page Count:" variant="soft" size="sm"/>
        <UInput v-model.lazy="pageCount" type="number" size="sm"/>
      </UButtonGroup>
      <span class="flex  items-center w-full">
        <UBadge label="Pagination:" variant="soft" size="sm"/>
        <UToggle v-model="pagination"/>
      </span>
      </div>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>