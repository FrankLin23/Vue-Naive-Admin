<script setup lang="ts">
  import type { FormInst, FormRules } from 'naive-ui';
  import { ref } from 'vue';

  interface LoginInfoType {
    username: string | null;
    password: string | null;
  }

  const formRef = ref<FormInst | null>(null);
  const loginForm = ref<LoginInfoType>({
    username: null,
    password: null,
  });

  const loginRules: FormRules = {
    username: [
      {
        required: true,
        message: 'Please input username',
      },
    ],
    password: [
      {
        required: true,
        message: 'Please input password',
      },
    ],
  };
  function handleLogin(e: MouseEvent) {
    e.preventDefault();
    formRef.value?.validate((erorrs) => {
      if (!erorrs) {
      } else {
      }
    });
  }
</script>

<template>
  <div w-full h-screen flex items-center justify-center>
    <NForm
      ref="formRef"
      :model="loginForm"
      :rules="loginRules"
      label-placement="left"
      class="login-form"
    >
      <h3 text-center mb-10>Vue Naive Admin</h3>
      <NFormItem label="Username" path="username">
        <NInput v-model:value="loginForm.username" @keydown.enter.prevent />
      </NFormItem>
      <NFormItem label="Password" path="password">
        <NInput
          v-model:value="loginForm.password"
          type="password"
          @keydown.enter.prevent
        />
      </NFormItem>
      <NButton round type="primary" @click="handleLogin" style="width: 100%"
        >Login</NButton
      >
    </NForm>
  </div>
</template>

<style scoped>
  .login-form {
    width: 400px;
    padding: 30px;
    box-shadow: 10px;
    background-color: antiquewhite;
  }
</style>
