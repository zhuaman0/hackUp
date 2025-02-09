<template>
	<div>
		<div v-if="showMain" class="main">
			<h1>Тараз шаһарына <br> Қош келдіңіздер!</h1>
		</div>
		<div v-else class="second-main mt-12">
			<h1 class="text-[70px] font-bold text-[#21453C]">Тараз қаласы</h1>
		<div class="tabs flex gap-8 border-b border-gray-300 my-6">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="selectTab(tab)"
        :class="[
          'pb-2 text-lg',
          currentTab === tab
            ? 'border-b-4 border-green-600 text-green-800 font-normal'
            : 'text-gray-500 hover:text-green-800'
        ]"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content text-xl text-gray-700">
      <p v-if="currentTab === 'Қазір'">
        Қала дамуы мен қазіргі келбеті. Бүгінгі таңда Тараз – тарихи мұра мен заманауи инфрақұрылым үйлескен қала. Қалада жаңа тұрғын үй кешендері, мәдени орталықтар және туристік аймақтар дамып келеді. Қала дамуы мен қазіргі келбеті. Бүгінгі таңда Тараз – тарихи мұра мен заманауи инфрақұрылым үйлескен қала. Қалада жаңа тұрғын үй кешендері, мәдени орталықтар және туристік аймақтар дамып келеді. Қала дамуы мен қазіргі келбеті. Бүгінгі таңда Тараз – тарихи мұра мен заманауи инфрақұрылым үйлескен қала. Қалада жаңа тұрғын үй кешендері, мәдени орталықтар және туристік аймақтар дамып келеді. Қала дамуы мен қазіргі келбеті. Бүгінгі таңда Тараз – тарихи мұра мен заманауи инфрақұрылым үйлескен қала. Қалада жаңа тұрғын үй кешендері, мәдени орталықтар және туристік аймақтар дамып келеді.
      </p>
      <p v-if="currentTab === 'Тарихы'">
        Тараз қаласының бай тарихы 2000 жылдан астам уақытқа созылады. Бұл аймақ Ұлы Жібек жолының маңызды бөлігі болды.
      </p>
      <p v-if="currentTab === 'Демография'">
        Қала халқы шамамен 400,000 адамды құрайды, оның ішінде түрлі этностар өкілдері тұрады.
      </p>
      <p v-if="currentTab === 'Фактілер'">
        Тараз – Қазақстандағы ең көне қалалардың бірі. Бұл аймақ өз керемет табиғатымен және мәдени мұрасымен танымал.
      </p>
    </div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'default'
})
import { ref, onMounted } from 'vue'

const showMain = ref(true)
onMounted(() => {
	setTimeout(() => {
		showMain.value = false
	}, 100)
})
const tabs = ref(["Қазір", "Тарихы", "Демография", "Фактілер"]);
    const currentTab = ref("Қазір");

    const selectTab = (tab) => {
      currentTab.value = tab;
    };
</script>

<style scoped>
.main {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0%;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('/public/img/main-page/ch.png');
	background-size: cover;
	background-repeat: no-repeat;
	font-size: 90px;
	color: white;
	font-weight: 900;
	line-height: 120px;
}
.tabs-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
