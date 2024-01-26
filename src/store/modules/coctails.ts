import { defineStore } from 'pinia';
import axios from 'axios';
import { CoctailTypes, ICoctail } from '../../types/coctails';

interface CoctailState {
	coctail: ICoctail | null;
}

export const useCoctailsStore = defineStore('coctails', {
	state: (): CoctailState => ({
		coctail: null,
	}),
	actions: {
		async getCoctail(code: CoctailTypes) {
			const { data } = await axios.get(import.meta.env.VITE_API_URL + code);
			this.coctail = data?.drinks[0];
		},
	},
});
