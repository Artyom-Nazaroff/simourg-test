<template>
	<div
		v-if="currentCoctail"
		class="coctail"
	>
		<div class="coctail__description">
			<h2>
				{{ currentCoctail.strDrink }}
			</h2>
			<p>
				{{ currentCoctail.strAlcoholic }}
				{{ currentCoctail.strCategory }}
				{{ currentCoctail.strGlass }}
			</p>
			<div>
				<h3>List of ingredients</h3>
				<template v-for="num in 5">
					<p
						v-if="currentCoctail[`strIngredient${num}`]"
						:key="num"
					>
						{{ currentCoctail[`strIngredient${num}`] }}
						{{ currentCoctail[`strMeasure${num}`] }}
					</p>
				</template>
			</div>
		</div>
		<div class="coctail__image">
			<v-lazy-image
				:src="currentCoctail.strDrinkThumb"
				src-placeholder="Loading..."
				:alt="currentCoctail.strDrink"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useCoctailsStore } from '../store/modules/coctails';
	import { storeToRefs } from 'pinia';
	import VLazyImage from 'v-lazy-image';

	const store = useCoctailsStore();

	const { currentCoctail } = storeToRefs(store);
</script>

<style lang="scss" scoped>
	.coctail {
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 15px;

		@media (min-width: 720px) {
			flex-direction: row;
		}

		&__description {
			flex: 1 1 50%;
		}
		&__image {
			flex: 1 1 50%;
			position: relative;
		}
	}
</style>
