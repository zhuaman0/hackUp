<template>
	<div class="z-50">
		<div class="aside-container">
			<div class="con">
				<div class="header-row">
					<div class="logo">
						<img src="/public/img/logo/taraz-log.png" alt="Taraz Logo">
					</div>
				</div>
				<div class="items-container">
					<div class="items-links links">
						<img src="/icons/home-icon.png" alt="">
						<span>Басты бет</span>
					</div>
					<div class="items-links link">
						<img src="/icons/map.png" alt="">
						<span>Карта</span>
					</div>
					<div class="items-links link">
						<img src="/icons/challeng.png" alt="">
						<span>Челлендж</span>
					</div>
				</div>
				<div class="footer-row">
					<div>
						<div class="items-links">
							<div class="bg-gray-300 rounded-[50%] w-8 h-8"></div>
							<span>Алишер Жүнісов</span>
						</div>
						<div class="mt-4">
							<div class="flex items-center">
								<img src="/icons/baps.svg" alt="">
								<span class="pl-2">Баптаулар</span>
							</div>
							<div class="flex items-center mt-2">
								<img src="/icons/baps.svg" alt="">
								<span class="pl-2">Баптаулар</span>
							</div>
						</div>
					</div>
				</div> <!-- Закрытие footer-row -->
			</div> <!-- Закрытие con -->
		</div> <!-- Закрытие aside-container -->
	</div>
</template>

<script setup>
</script>

<style scoped>
.aside-container {
	border-right: 1.5px solid #7D7D7D;
	border-radius: 7px;
	width: 280px;
	height: 100vh;
	position: sticky;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	padding: 30px 0;
	background: #fff;
}
.con {
	max-width: 220px;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
}
.header-row {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px 0;
}
.logo img {
	width: 150px; 
	height: 70px;
	margin-bottom: 30px;
}
.items-links {
	display: flex;
	align-items: center;
	font-family: 'MyFont';
	font-weight: bold;
	margin-bottom: 20px;
}
.items-links span {
	padding-left: 5px;
}
.items-links img {
	width: 25px;
}
.links img {
	width: 30px;
}
.footer-row {
	margin-top: auto;
}
</style>
