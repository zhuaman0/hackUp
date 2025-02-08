<template>
  <div>
	<div class="container mx-auto">
		<div>
			<h1 class="title">Қайда баруға болады?</h1>
			<div class="flex mt-6">
				<div class="relative mr-6">
				<img class="rounded-xl" src="/public/img/main-page/hotels.png" alt="">
				<span class="absolute bottom-3 text-white left-3">Қонақ үйлер</span>
			   </div>
			   <div class="relative mr-6">
				<img class="rounded-xl" src="/public/img/main-page/eating.png" alt="">
				<span class="absolute bottom-3 text-white left-3">Тамақтану орындары</span>
			   </div>
			   <div class="relative mr-6">
			   	<img class="rounded-xl" src="/public/img/main-page/interesting.png" alt="">
				<span class="absolute bottom-3 text-white left-3">Қызықты жерлер</span>
			   </div>
			</div>
		</div>
	</div>

	
	<div class="container">
		<h1 class="ai-title">Біздің ЖИ арқылы сұрақтарыңызға жауап алыңыз</h1>
		<div class="ai-container">
			<div class="ai-box">
		<div class="ai-icon">✨</div>
		<div class="ai-questions">
			<button v-for="(question, index) in questions" :key="index" class="ai-question">
			{{ question }}
			</button>
		</div>
		<div class="ai-input-box">
			<input type="text" placeholder="Сұрағыңызды жазыңыз" class="ai-input" />
			<button class="ai-send-btn">
				<img width="30" height="30" src="./icons/send-is.svg">
			</button>
		</div>  
		</div>
	</div>
  </div>


	<!-- “Ел таңдауы” топтамасы -->
		<div class="container">
		<h1 class="title-h1">"Ел таңдауы" топтамасы</h1>
		<div class="places-grid">
		<div v-for="(place, index) in places" :key="index" class="place-card">
			<img :src="place.image" :alt="place.name" class="place-image">
			<div class="place-info">
			<h2 class="place-title">{{ place.name }}</h2>
			<h3 class="place-title-h3">{{ place.title }}</h3>
			<p class="place-description">{{ place.description }}</p>
			<a href="#" class="read-more">әрі қарай →</a>
			</div>
		</div>
		</div>
		</div>
  </div>
</template>

<script lang="ts" setup>
	const questions = [
	"Таразда қандай көрікті жерлер бар?",
	"Ең үлкен кесене қандай?",
	"Таразда қанша адам тұрады?",
	"Таразда қанша мешіт бар?",
	"Тараздағы қыздарды сындыру оңай ма?",
	"Талас өзенінің ұзындығы қанша?",
	"Таразда мафия бар ма?",
	];


	const places = [
  {
    name: "Айша Бибі кесенесі",
	title:"Махаббат жыры",
    description: "Айша бибі кесенесі — ХІ-XII ғасырлардағы сәулет өнерінің көрнекті ескерткіші. Жамбыл облысы, Жамбыл ауданында, Тараз қаласынан 18 шақырым жерде, Айша бибі ауылында орналасқан.",
    image: "./img/aysha-bibi.jpg",
  },
  {
    name: "Қарахан кесенесі",
	title:"Махаббат жыры",
    description: "Қарахан кесенесі - Қазақстанда 11 ғасырдан сақталған сәулет өнері ескерткіші. Кесене Қарахан әулетінен шыққан белгілі хан Ша-Махмуд Бұғра Қарахан қабірінің басына орнатылған.",
    image: "./img/karakhan.jpg",
  },
  {
    name: "Mart",
	title:"Махаббат жыры",
    description: "Март – Тараздағы ең үлкен және де жалғыз ТРЦ.",
    image: "./img/mart.jpg",
  },
  {
    name: "Жеңіс паркі",
	title:"Махаббат жыры",
    description: "Тараздағы ең көп адам жүретін парк.",
    image: "./img/zhenis-park.jpg",
  }
];
</script>

<style scoped>
.title {
	font-family: 'MyFont';
	font-weight: 700;
	font-size: 24px;
	font-weight: bolder;
}

/*--------------- IA------------ */
.ai-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.ai-title {
  font-family: 'MyFont';
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
}

.ai-box {
  background: white;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #A5A5A5;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ai-icon {
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 15px;
}

.ai-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ai-question {
  background: #e6985d;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.ai-question:hover {
  background: #d1844e;
}

.ai-input-box {
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 25px;
  padding: 5px 10px;
  background: white;
}

.ai-input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
}

.ai-send-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

 /* ----------“Ел таңдауы” топтамасы---------- */
.container {
  font-family: 'MyFont';
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title-h1 {
  font-family: 'MyFont';
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
  text-align: start;
}

.places-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-left:50px;
  align-items: center;
  justify-content: center;
}

.place-card {
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
  width: 100%;
}

.place-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.place-info {
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.place-title {
  font-size: 26px;
  font-weight: bold;
}
.place-title-h3{
	font-size: 18px;
	font-weight: bold;
}

.place-description {
  font-size: 16px;
  color: rgb(0, 0, 0);
}

.read-more {
  color: red;
  text-decoration: none;
  font-weight: bold;
}
</style>