<template>
  <div class="container">
    <h1 class="title">Тамақтану орындары</h1>
    <div class="places-grid">
      <div v-for="(place, index) in places" :key="index" class="place-card">
        <img :src="place.image" :alt="place.name" class="place-image">
        <div class="place-info">
          <h2 class="place-title">{{ place.name }}</h2>
          <p class="place-description">{{ place.description }}</p>
          <button class="map-button">Картада көру</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const places = [
  {
    name: "Marvarid",
    description: "Ресторан с fusion-кухней и с очень вкусными блюдами",
    image: "./img/marvarid.jpg",
  },
  {
    name: "Kish Mish",
    description: "Ресторан с fusion-кухней и с очень вкусными блюдами",
    image: "./img/kish-mish.jpg",
  },
  {
    name: "Sherbet",
    description: "Ресторан с fusion-кухней и с очень вкусными блюдами",
    image: "./img/sherbet.jpg",
  },
  {
    name: "Zheka’s Doner",
    description: "Донерка с вкусными и необычными позициями",
    image: "./img/zhekas-doner.jpg",
  },
  {
    name: "Salam Bro",
    description: "Бургерная с вкусными и необычными позициями",
    image: "./img/salam-bro.jpg",
  },
  {
    name: "Sherbet",
    description: "Ресторан с fusion-кухней и с очень вкусными блюдами",
    image: "./img/sherbet2.jpg",
  },
];
</script>

<style scoped>
.container {
  font-family: 'MyFont';
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: start;
}

.places-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  justify-content: center;
}

.place-card {
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
}

.place-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

.place-info {
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.place-title {
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
}

.place-description {
  font-size: 14px;
  color: gray;
}

.map-button {
  background: #3C3C43;
  color: white;
  padding: 8px 12px;
  border-radius: 25px;
  font-size: 14px;
  text-align: center;
  transition: background 0.3s;
  width: 142px;
  margin-top: 10px;
}

.map-button:hover {
  background: #55555A;
}

@media (min-width: 500px) {
  .places-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .places-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
