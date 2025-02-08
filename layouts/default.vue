<template>
	<div class="container">
	  <BaseAside class="aside" />
	  <main class="content">
		 <slot />
	  </main>
	</div>
 </template>
 
 <script lang="ts" setup>
 
 </script>
 
 <style scoped>
 .container {
	display: flex;
	width: 100%;
	max-width: 100%;
 }
 
 .aside {
	width: 250px; 
 }
 
 .content {
	flex: 1;
	padding: 20px 60px;
 }
 </style>
 