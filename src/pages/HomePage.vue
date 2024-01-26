<template>
	<div class="wrapper">
		<Menu />
		<Coctail />
	</div>
</template>

<script setup lang="ts">
	import Menu from '../components/Menu.vue'
	import Coctail from '../components/Coctail.vue';
</script>

<style lang="scss" scoped>
	.wrapper {
		display: flex;
		border: 1px solid;
	}
</style>
