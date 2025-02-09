<template>
	<div>
		<div class="container-[1200px] mx-auto p-20">
			<div class="bg-[#dce5d7] relative w-full h-[30vh] flex items-center justify-center rounded-[60px]">
				<div class="absolute right-5 top-5">
					<img src="/icons/pen.png" alt="">
				</div>
				<div>
					<img src="/icons/plus.png" alt="">
				</div>
			</div>
			<div class="mt-8 border-b-[3px] pb-8 rounded-sm border-b-[#45752C]">
				<h1 class="text-[22px] font-bold">Айгерімкаа</h1>
				<p class="text-[#817F7F] font-thin">aigerimkulysheva@gmail.com</p>
			</div>
			<div class="border-b-[3px] border-b-[#45752C]">
				<div class="bg-[#45752C] w-full h-[20vh] rounded-[30px] my-12 py-2 flex justify-center items-center">
					<div class="flex flex-col items-center">
						<h1 class="text-center text-white text-[30px]">Сенің Ұлы Тараз қорғаушысы 🏛️ атануына <br> 7 деңгей қалды!</h1>
						<div>
							<button class="text-[#45752C] bg-white text-center px-24 py-4 rounded-[55px] font-medium text-xl mt-4">Ойнау!</button>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-8">
				<h1 class="text-[25px] font-medium">Статистика</h1>
				<div class="mt-4 grid grid-cols-2 gap-4">
					<div class="flex items-center border-[2px] border-[#45752C] rounded-3xl p-4">
						<img src="/icons/op.png" alt="">
						<div class="ml-4">
							<h1>Турист</h1>
							<span>Сенің қазіргі деңгейің</span>
						</div>
					</div>
					<div class="flex items-center border-[2px] border-[#45752C] rounded-3xl p-4">
						<img src="/icons/op.png" alt="">
						<div class="ml-4">
							<h1>Турист</h1>
							<span>Сенің қазіргі деңгейің</span>
						</div>
					</div>
					<div class="flex items-center border-[2px] border-[#45752C] rounded-3xl p-4">
						<img src="/icons/op.png" alt="">
						<div class="ml-4">
							<h1>Турист</h1>
							<span>Сенің қазіргі деңгейің</span>
						</div>
					</div>
					<div class="flex items-center border-[2px] border-[#45752C] rounded-3xl p-4">
						<img src="/icons/op.png" alt="">
						<div class="ml-4">
							<h1>Турист</h1>
							<span>Сенің қазіргі деңгейің</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'default'
})
</script>

<style scoped>

</style>