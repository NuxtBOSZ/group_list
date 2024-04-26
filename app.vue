<script setup lang="ts">

import {useTokenStore} from "~/stores/token";
import {storeToRefs} from 'pinia'

const tokenStore = useTokenStore();
const {name} = storeToRefs(tokenStore);

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Login',
  icon: 'i-heroicons-user-circle',
  to: 'login'
}, {
  label: 'Users',
  icon: 'i-heroicons-user-circle',
  to: 'users'
}]

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})



</script>

<template>
  <div class="h-screen flex flex-col">
    <nav class="h-[5%] flex justify-between items-center p-4">
      <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800"/>
      <span class="flex items-center">
        <ClientOnly>
          <UButton
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8"/>
          </template>
        </ClientOnly>
        <UBadge v-if="name" :label="name"></UBadge>
      </span>
    </nav>

    <NuxtLayout>
      <NuxtPage class="h-[95%]"/>
    </NuxtLayout>

    <UModals />
    <UNotifications />
  </div>
</template>
