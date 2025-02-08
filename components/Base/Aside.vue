<template>
	<div>
		<div class="aside-container">
			<div class="con">
				<div class="header-row">
					<div class="logo">
					Logo
				</div>
				<div class="search-container">
					<img src="/public/icons/search-icon.svg" alt="">
					<input placeholder="Іздеу" type="search">
				</div>
				<div class="items-container">
					<div class="items-links links">
						<img src="/public/icons/home-icon.svg" alt="">
						<span>Басты бет</span>
					</div>
					<div class="items-links link">
						<img src="/public/icons/tour-icon.svg" alt="">
						<span>Турлар</span>
					</div>
					<div class="items-links link">
						<img src="/public/icons/games-icon.svg" alt="">
						<span>Ойындар</span>
					</div>
					<div class="items-links link">
						<img src="/public/icons/history-icon.svg" alt="">
						<span>Ойындар</span>
					</div>
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
								<img src="/public/icons/baps.svg" alt="">
								<span class="pl-2">Баптаулар</span>
							</div>
							<div class="flex items-center mt-2">
								<img src="/public/icons/baps.svg" alt="">
								<span class="pl-2">Баптаулар</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
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
}
.con {
	max-width: 220px;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
}
.logo {
	font-family: 'MyFont', sans-serif;
	font-weight: bold;
	margin-bottom: 15px;
}
.search-container {
	position: relative;
	margin: 5px 0;
}
.search-container img {
	position: absolute;
	top: 10px;
	left: 10px;
	width: 20px;
}
.search-container input {
	border: 1px solid #7D7D7D;
	border-radius: 25px;
	width: 100%;
	height: 40px;
	padding-left: 35px;
	font-size: 15px;
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
.items-container {
	margin-top: 50px;
}
.footer-row {
	margin-top: auto;
}
</style>