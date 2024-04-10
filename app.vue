<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Login',
  icon: 'i-heroicons-user-circle',
  to: 'login'
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
  <div class="h-screen">
    <nav class="flex justify-between p-4">
      <UBreadcrumb :links="links" :ui="{ ol: 'gap-x-3', li: 'gap-x-3' }">
        <template #divider>
          <span class="w-8 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
        </template>
      </UBreadcrumb>

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

    </nav>

    <NuxtLayout >
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
