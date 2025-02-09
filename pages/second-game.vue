<template>
	<div class="quiz-container">
		<h1>Екінші ойын</h1>

		<div v-if="!quizFinished">
			<h2>{{ currentQuestion.question }}</h2>
			<p>Уақыт: {{ timeLeft }} секунд</p>

			<div class="answers">
				<button
					v-for="(answer, key) in currentQuestion.answers"
					:key="key"
					@click="selectAnswer(key)"
					class="answer-btn"
				>
					{{ answer }}
				</button>
			</div>

			<button @click="nextQuestion" class="next-btn">Келесі сұрақ</button>
		</div>

		<div v-else class="result">
			<h2>Тест аяқталды!</h2>
			<p>Сіздің нәтижеңіз: {{ score }} / {{ questions.length }}</p>
			<button @click="restartQuiz">Қайта бастау</button>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const questions = ref([
	{
		question: "Тараз қаласы қай ғасырда негізі қаланған?",
		answers: { a: "VIII ғасыр", b: "X ғасыр", c: "VI ғасыр", d: "XIII ғасыр" },
		answer: "c"
	},
	{
		question: "Тараз ежелгі заманда қандай атаумен белгілі болған?",
		answers: { a: "Ясы", b: "Баласағұн", c: "Талғар", d: "Талас" },
		answer: "d"
	},
	{
		question: "Тараз қаласы қай өзеннің бойында орналасқан?",
		answers: { a: "Іле", b: "Есіл", c: "Талас", d: "Жайық" },
		answer: "c"
	},
	{
		question: "Тараз қаласындағы әйгілі кесене қалай аталады?",
		answers: { a: "Айша бибі", b: "Арыстан баб", c: "Қожа Ахмет Яссауи", d: "Мұхаммед Хайдар Дулати" },
		answer: "a"
	}
]);

const currentQuestionIndex = ref(0);
const score = ref(0);
const quizFinished = ref(false);
const timeLeft = ref(20);
let timer = null;

const currentQuestion = ref(questions.value[currentQuestionIndex.value]);

const startTimer = () => {
	clearInterval(timer);
	timeLeft.value = 20;
	timer = setInterval(() => {
		if (timeLeft.value > 0) {
			timeLeft.value--;
		} else {
			nextQuestion();
		}
	}, 1000);
};

const selectAnswer = (selectedKey) => {
	if (selectedKey === currentQuestion.value.answer) {
		score.value++;
	}
	nextQuestion();
};

const nextQuestion = () => {
	if (currentQuestionIndex.value < questions.value.length - 1) {
		currentQuestionIndex.value++;
		currentQuestion.value = questions.value[currentQuestionIndex.value];
		startTimer();
	} else {
		quizFinished.value = true;
		clearInterval(timer);
	}
};

const restartQuiz = () => {
	currentQuestionIndex.value = 0;
	score.value = 0;
	quizFinished.value = false;
	currentQuestion.value = questions.value[0];
	startTimer();
};

onMounted(startTimer);
onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
.quiz-container {
	text-align: center;
	max-width: 500px;
	margin: auto;
	padding: 20px;
}

.answers {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 15px;
}

.answer-btn, .next-btn {
	background-color: #6200ea;
	color: white;
	border: none;
	padding: 10px;
	cursor: pointer;
	border-radius: 5px;
	transition: background 0.3s;
}

.answer-btn:hover, .next-btn:hover {
	background-color: #3700b3;
}

.result {
	margin-top: 20px;
}
</style>
