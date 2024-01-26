import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ErrorPage from '../pages/ErrorPage.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/margarita',
		component: HomePage,
	},
	{
		path: '/mojito',
		component: HomePage,
	},
	{
		path: '/a1',
		component: HomePage,
	},
	{
		path: '/kir',
		component: HomePage,
	},
	{
		path: '/:pathMatch(.*)*',
		component: ErrorPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;