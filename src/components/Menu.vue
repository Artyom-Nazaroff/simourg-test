<template>
	<ul class="list">
		<li
			v-for="coctail in coctails"
			:key="coctail"
			class="list__item"
			:class="{
				'list__item--active': currentCoctail === coctail
			}"
			@click="getCoctail(coctail)"
		>
			{{ coctail }}
		</li>
	</ul>
</template>

<script setup lang="ts">
	import { useRouter, useRoute } from 'vue-router';
	import { useCoctailsStore } from '../store/modules/coctails';
	import { CoctailTypes } from '../types/coctails';
	import { computed } from 'vue';

	const router = useRouter();
	const route = useRoute();

	const coctailsStore = useCoctailsStore();

	const coctails: CoctailTypes[] = ['margarita', 'mojito', 'a1', 'kir'];

	const currentCoctail = computed(() => {
		return route.path.slice(1);
	});

	const getCoctail = (coctail: CoctailTypes) => {
		router.push(coctail);
		coctailsStore.getCoctail(coctail);
	};
</script>

<style lang="scss" scoped>
	.list {
		margin: 0;
		padding: 25px;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
			'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		background-color: rgba(92, 180, 243, 0.581);

		&__item {
			font-size: 20px;
			&::first-letter {
				font-size: 24px;
				text-transform: uppercase;
			}

			&--active {
				color: red;
			}
		}
	}
</style>
