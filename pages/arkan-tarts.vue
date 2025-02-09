<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
    <h1 class="text-4xl font-bold mb-8">Арқан Тарту Ойыны</h1>

    <div class="w-full max-w-4xl relative flex items-center justify-center">
      <!-- Центральная линия -->
      <div class="absolute left-1/2 top-0 bottom-0 w-2 bg-red-500 transform -translate-x-1/2"></div>

      <!-- Веревка -->
      <div class="relative flex items-center w-full">
        <!-- Маркер на центре -->
        <div class="absolute left-1/2 transform -translate-x-1/2 bg-red-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg"></div>

        <!-- Ручка веревки -->
        <div
          :style="{ left: `${progress}%` }"
          class="absolute w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2"
        >
          <img class="verevka" width="300" height="300" src="/img/arkan.jpeg" alt="Арқан" />
        </div>
      </div>
    </div>

    <div
      v-if="winner !== null"
      class="mt-8 text-2xl font-bold"
      :class="winner === 'playerA' ? 'text-blue-600' : 'text-green-600'"
    >
      {{ winner === 'playerA' ? '🎉 A жеңді! 🎉' : '🎉 B жеңді! 🎉' }}
    </div>

    <div class="mt-8 flex gap-4">
      <button @click="startGame" :disabled="isGameActive" class="px-6 py-2 bg-blue-500 text-white font-bold rounded shadow hover:bg-blue-600">
        Бастау
      </button>
      <button @click="restartGame" class="px-6 py-2 bg-gray-500 text-white font-bold rounded shadow hover:bg-gray-600">
        Қайта бастау
      </button>
    </div>

    <div class="mt-4 text-lg">
      <strong>Басқару:</strong> <br />
      - <span class="text-blue-600">A</span> (сол жақ) басу → Oйнаушы A тартады <br />
      - <span class="text-green-600">L</span> (оң жақ) басу → Oйнаушы B тартады
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const progress = ref(50);
const isGameActive = ref(false);
const winner = ref(null);

const startGame = () => {
  isGameActive.value = true;
  winner.value = null;
  progress.value = 50;
};

const restartGame = () => {
  startGame();
};

// Обработчик нажатий клавиш
const handleKeydown = (event) => {
  if (!isGameActive.value || winner.value !== null) return;

  if (event.key === "a" || event.key === "A") {
    progress.value = Math.max(0, progress.value - 2); // Игрок A тянет влево
    checkWinner();
  }

  if (event.key === "l" || event.key === "L") {
    progress.value = Math.min(100, progress.value + 2); // Игрок B тянет вправо
    checkWinner();
  }
};

// Проверка победителя
const checkWinner = () => {
  if (progress.value <= 0) {
    winner.value = "playerA";
    isGameActive.value = false;
  } else if (progress.value >= 100) {
    winner.value = "playerB";
    isGameActive.value = false;
  }
};

// Устанавливаем обработчик клавиш
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
.verevka{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
