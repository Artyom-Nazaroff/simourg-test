<template>
	<div
		v-if="coctail"
		class="coctail"
	>
		<div class="coctail__description">
			<h2>
				{{ coctail.strDrink }}
			</h2>
			<p>
				{{ coctail.strAlcoholic }}
				{{ coctail.strCategory }}
				{{ coctail.strGlass }}
			</p>
			<div>
				<h3>List of ingredients</h3>
				<p v-if="coctail.strIngredient1">
					{{ coctail.strIngredient1 }} {{ coctail.strMeasure1 }}
				</p>
			</div>
		</div>
		<div class="coctail__image-wrapper">
			<img
				class="coctail__image"
				v-lazy="coctail.strDrinkThumb"
				:alt="coctail.strDrink"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useCoctailsStore } from '../store/modules/coctails';
	import { storeToRefs } from 'pinia';
	import { CoctailTypes } from '../types/coctails';

	const store = useCoctailsStore();

	const { coctail } = storeToRefs(store);

	// const increment = store.increment
</script>

<style lang="scss" scoped>
	.coctail {
		display: flex;
		padding: 15px;

		&__description {
			flex: 1 1 50%;
		}
		&__image-wrapper {
			flex: 1 1 50%;
			position: relative;
		}

		&__image {
			width: 100%;

			&[lazy='loading'] {
				width: 30px;
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	}
</style>
