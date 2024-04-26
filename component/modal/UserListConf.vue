<script setup lang="ts">
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const {pageCount,pagination} = storeToRefs(userStore);

const emit = defineEmits(['clear','select'])
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
      <template #footer>
        <div class="flex justify-between items-center p-2">
          <UButtonGroup>
            <UButton @click="emit('clear')" variant="soft">Clear Selection</UButton>
            <UButton @click="emit('select')" variant="soft">Select All</UButton>
          </UButtonGroup>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>