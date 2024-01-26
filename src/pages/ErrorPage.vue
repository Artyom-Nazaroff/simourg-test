<template>
	<div class="error">
		<span class="error__text"> error!!! </span>
		<router-link to="/margarita">Вернуться на стартовую страницу</router-link>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
	.error {
		height: 90px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&__text {
			font-size: 30px;
			text-transform: uppercase;
		}
	}
</style>
