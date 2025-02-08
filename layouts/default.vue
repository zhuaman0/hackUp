<template>
  <div class="container">
	<BaseAside/>
	<main>
		<slot />
	</main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.container {
	display: grid;
	grid-template-columns: repeat(8, 1fr);
}
main {
	grid-column: span 6;
}
</style>