<script setup lang="ts">
import { ref } from 'vue';


const formData = ref({
  name: '',
  password: ''
});

const formType = ref('Login'); // Change to 'Register' when switching to registration form

const handleSubmit = async () => {
  const response = await fetch(`http://localhost:2050/user/${formType.value.toLowerCase()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData.value)
  });

  if (response.ok) {
    // Handle successful login or registration
    console.log(`${formType.value} successful`);
  } else {
    // Handle failed login or registration
    console.error(`${formType.value} failed`);
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <nuxt-ui-container class="max-w-md w-full bg-white p-8 rounded shadow-md">
      <h2 class="text-xl font-semibold mb-4">{{ formType }}</h2>
      <nuxt-ui-form @submit="handleSubmit">
        <nuxt-ui-input v-model="formData.name" label="Username" required></nuxt-ui-input>
        <nuxt-ui-input v-model="formData.password" type="password" label="Password" required></nuxt-ui-input>
      </nuxt-ui-form>
    </nuxt-ui-container>
  </div>
</template>
