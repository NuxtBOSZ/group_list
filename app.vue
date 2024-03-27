<script setup lang="ts">
import type {userDO} from "~/DO/DO";

const users = ref<userDO[]>([{name:"ta"}])
const usersSelected = ref<userDO[]>([])
const nameUser = ref<string>("");
const addUser = () => {
  if (nameUser.value != "")
  users.value.push({name:nameUser.value});
}

</script>


<template>
  <div>
    <div class="h-screen flex flex-col">
        <nav class="flex justify-between h-1/6">
          <UFormGroup label="User">
            <UButtonGroup>
              <UButton @click="addUser">add</UButton>
              <UInput v-model="nameUser" placeholder="Name" icon="i-heroicons-user" />
            </UButtonGroup>
          </UFormGroup>
          <UFormGroup label="Group">
            <UButtonGroup>
            <UButton>add</UButton>
            <UInput placeholder="Name" icon="i-heroicons-user-group" />
            </UButtonGroup>
          </UFormGroup>
        </nav>

      <div class="flex justify-between h-5/6 ">
        <div class="h-full overflow-scroll">
        <UTable v-model="usersSelected" :rows="users" />
        </div>
        <span>
        <UTable v-model="usersSelected" :rows="users" />
        </span>
      </div>

<!--      <template #footer>-->
<!--        <Placeholder class="h-8" />-->
<!--      </template>-->
    </div>
  </div>
</template>
