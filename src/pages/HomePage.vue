<template>
	<div class="wrapper">
		<Menu />
		<Coctail />
	</div>
</template>

<script setup lang="ts">
	import Menu from '../components/Menu.vue';
	import Coctail from '../components/Coctail.vue';
	import { onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import { CoctailTypes } from '../types/coctails';
	import { useCoctailsStore } from '../store/modules/coctails';

	const route = useRoute();

	const coctailsStore = useCoctailsStore();

	onMounted(() => {
		const coctail = route.path.slice(1) as CoctailTypes;
		coctailsStore.getCoctail(coctail);
	});
</script>

<style lang="scss" scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		border: 1px solid;
		min-height: 417px;

		@media (min-width: 950px) {
			flex-direction: row;
		}
	}
</style>
