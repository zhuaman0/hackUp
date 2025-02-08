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
	display: flex;
}
</style>