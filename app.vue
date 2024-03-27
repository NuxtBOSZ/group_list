<script setup lang="ts">
import type {userDO} from "~/DO/DO";

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const users = ref<userDO[]>([{name: "ta"}])
const usersSelected = ref<userDO[]>([])
const nameUser = ref<string>("");
const addUser = () => {
  if (nameUser.value != "")
    users.value.push({name: nameUser.value});
}

</script>


<template>
  <div>
    <div class="h-screen flex flex-col ">
      <nav class="flex justify-around h-[5%]">
        <UFormGroup label="User" class="p-4">
          <UButtonGroup>
            <UButton @click="addUser">add</UButton>
            <UInput v-model="nameUser" placeholder="Name" icon="i-heroicons-user"/>
          </UButtonGroup>
        </UFormGroup>
        <ClientOnly>
          <UButton
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
        <UFormGroup label="Group" class="p-4">
          <UButtonGroup>
            <UButton>add</UButton>
            <UInput placeholder="Name" icon="i-heroicons-user-group"/>
          </UButtonGroup>
        </UFormGroup>
      </nav>
      `
      <UDivider/>
      <div class="flex h-[95%] ">
        <span class="h-full overflow-scroll w-1/2">
        <UTable v-model="usersSelected" :rows="users"/>
        </span>
        <span class="h-full overflow-scroll w-1/2">
        <UTable v-model="usersSelected" :rows="users"/>
        </span>
      </div>

      <!--      <template #footer>-->
      <!--        <Placeholder class="h-8" />-->
      <!--      </template>-->
    </div>
  </div>
</template>
