<script setup>
import { ref } from 'vue';

const message = ref('');
const response = ref('');

const sendMessage = async () => {
  try {
    const res = await $fetch('/api/chat', {
      method: 'POST',
      body: { message: message.value }
    });

    if (res && res.choices) {
      response.value = res.choices[0].message.content;
    } else {
      response.value = 'Ошибка: Некорректный ответ от API';
    }
  } catch (error) {
    console.error('Ошибка запроса:', error);
    response.value = 'Ошибка при запросе к API';
  }
};
</script>

<template>
  <div>
    <input v-model="message" placeholder="Введите сообщение" />
    <button @click="sendMessage">Отправить</button>
    <p>Ответ: {{ response }}</p>
  </div>
</template>
