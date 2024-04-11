<script setup lang="ts">
import {useTokenStore} from "~/stores/token";

const tokenStore = useTokenStore();
const {fetchToken , fetchRegister} = tokenStore;

const IName = ref<string>("");
const IPassword = ref<string>("");

const items = [{
  key: 'login',
  label: 'Login',
  description: 'Si tú quieres bailar, jugar, pintar, cantar Tú puedes venir a mi casa',
  fun: ()=>fetchToken(IName.value,IPassword.value),
}, {
  key: 'register',
  label: 'Register',
  description: 'La idea es compartir, te vas a divertir Si quieres venir a mi casa',
  fun: ()=>fetchRegister(IName.value,IPassword.value),
}]

// const { data, error, execute, pending, status } = await useLazyAsyncData('token',() => fetchToken(IName.value,IPassword.value),{
//   immediate: false
// })

</script>

<template>
  <UTabs :items="items" class="w-full">
    <template #item="{ item }">
      <UCard>
        <template #header>
          <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </template>

        <div v-if="item.key === 'login'" class="space-y-3">
          <UFormGroup label="Username" name="username" required>
            <UInput v-model="IName" required/>
          </UFormGroup>
          <UFormGroup label="Password" name="password" required>
            <UInput v-model="IPassword" type="password" required/>
          </UFormGroup>
        </div>
        <div v-else-if="item.key === 'register'" class="space-y-3">
          <UFormGroup label="Username" name="username" required>
            <UInput v-model="IName" required/>
          </UFormGroup>
          <UFormGroup label="Password" name="password" required>
            <UInput v-model="IPassword" type="password" required/>
          </UFormGroup>
        </div>

        <template #footer>
          <UButton color="black" @click="item.fun()">
            {{item.label}}
          </UButton>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>