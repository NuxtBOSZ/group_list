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
</script>

<template>
  <div class="h-screen">
    <nav>
      <UBreadcrumb :links="links" />
    </nav>

    <NuxtLayout >
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
