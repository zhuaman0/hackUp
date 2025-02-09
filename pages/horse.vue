<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold mb-8">Typing Horse Racing Game</h1>
    <div class="w-full max-w-4xl relative">
      <div v-for="(horse, index) in horses" :key="index" class="flex items-center mb-4 relative">
        <div class="w-full h-8 bg-gray-300 rounded relative">
          <div
            :style="{ left: `${horse.progress}%` }"
            class="absolute top-0 flex items-center justify-center"
          >
            <img width="50px" height="50px" src="../public/img/horse.png" alt="">
          </div>
        </div>
        <div class="ml-4 text-lg font-bold"> {{ }}</div>
      </div>
      <div class="absolute right-0 top-0 bottom-0 w-2 bg-red-500"></div>
    </div>

    <div v-if="isGameActive" class="mt-4 text-xl font-bold">
      ⏳ Time Left: {{ timer }}s
    </div>

    <div class="mt-8 w-full max-w-2xl">
      <p class="mb-4 text-xl">
        <span
          v-for="(word, index) in words"
          :key="index"
          :class="[ 'mr-2', { 'text-green-500': index < currentWordIndex }, { 'text-gray-400': index >= currentWordIndex } ]"
        >
          {{ word }}
        </span>
      </p>
      <input
        v-model="typedText"
        @input="checkWord"
        type="text"
        placeholder="Type here..."
        class="w-full p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring focus:border-blue-300"
        :disabled="winner !== null || !isGameActive"
      />
    </div>

    <div v-if="winner !== null" class="mt-8 text-2xl font-bold text-green-600">
      🎉 Horse {{ winner + 1 }} wins! 🎉
    </div>

    <div class="mt-8 flex gap-4">
      <button @click="startGame" :disabled="isGameActive" class="px-6 py-2 bg-blue-500 text-white font-bold rounded shadow hover:bg-blue-600">
        Start
      </button>
      <button @click="restartGame" class="px-6 py-2 bg-gray-500 text-white font-bold rounded shadow hover:bg-gray-600">
        Restart
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const horses = ref([{ progress: 0, speed: 1 }, { progress: 0, speed: 1 }, { progress: 0, speed: 1 }]);
const words = ref([]);
const currentWordIndex = ref(0);
const typedText = ref("");
const timer = ref(15);
const winner = ref(null);
const isGameActive = ref(false);

let autoMoveInterval = null;
let timerInterval = null;

const sentences = [
  "The quick brown fox jumps over the lazy dog happily",
    "A clever monkey swings from tree branches in the jungle",
    "She carefully placed the red apple on the wooden table",
    "The old man walked slowly through the empty city streets",
    "Bright stars twinkled above the calm ocean on summer nights",
    "A group of children played soccer near the school fence",
    "The small kitten chased a butterfly across the green meadow",
    "He quickly wrote a letter and sent it by mail",
    "The farmer planted fresh vegetables in his large garden",
    "They enjoyed delicious homemade pizza during the family night",
    "A young artist painted a beautiful sunset over mountains",
    "The scientist discovered a new planet far beyond the galaxy",
    "The detective carefully examined every clue in the crime scene",
    "A friendly dog barked loudly at the stranger passing by",
    "The teacher explained difficult math problems using examples",
    "She bought fresh flowers and placed them on the table",
    "A brave firefighter rescued a cat stuck on a tree",
    "The pilot skillfully landed the plane during a heavy storm",
    "The musician played a lovely melody on his grand piano",
    "The traveler explored ancient ruins deep in the tropical forest"
];

const fetchRandomSentence = () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  words.value = sentences[randomIndex].split(" ");
  currentWordIndex.value = 0;
};

const checkWord = () => {
  if (typedText.value.trim() === words.value[currentWordIndex.value]) {
    moveUserHorse();
    currentWordIndex.value++;
    typedText.value = "";
    if (currentWordIndex.value >= words.value.length) {
      endRace();
    }
  }
};

const moveUserHorse = () => {
  horses.value[0].progress += 10;
  if (horses.value[0].progress >= 100) {
    winner.value = 0;
    endRace();
  }
};

const startAutoMove = () => {
  clearInterval(autoMoveInterval);
  autoMoveInterval = setInterval(() => {
    for (let i = 1; i < horses.value.length; i++) {
      if (winner.value === null) {
        horses.value[i].progress += horses.value[i].speed;
        if (horses.value[i].progress >= 100) {
          winner.value = i;
          endRace();
        }
      }
    }
  }, 120);
};

const startTimer = () => {
  clearInterval(timerInterval);
  timer.value = 25;
  timerInterval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      endRace();
    }
  }, 1000);
};

const startGame = () => {
  isGameActive.value = true;
  winner.value = null;
  typedText.value = "";
  horses.value.forEach((horse) => {
    horse.progress = 0;
    horse.speed = Math.random() * 1 ;
  });
  
  fetchRandomSentence();
  startTimer();
  startAutoMove();
};

const restartGame = () => {
  startGame();
};

const endRace = () => {
  isGameActive.value = false;
  clearInterval(autoMoveInterval);
  clearInterval(timerInterval);
};

onBeforeUnmount(() => {
  clearInterval(autoMoveInterval);
  clearInterval(timerInterval);
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
