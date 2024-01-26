import { defineStore } from 'pinia';
import axios from 'axios';
import { CoctailTypes, ICoctail } from '../../types/coctails';

interface CoctailState {
	coctails: ICoctail[];
	currentCoctail: ICoctail | null;
}

export const useCoctailsStore = defineStore('coctails', {
	state: (): CoctailState => ({
		coctails: [],
		currentCoctail: null,
	}),
	actions: {
		async getCoctail(code: CoctailTypes): Promise<void>{
			const coctail = this.coctails.find(
				(el) => el.strDrink.toLowerCase() === code
			);
			if (coctail) {
				this.currentCoctail = coctail;
				return;
			}

			const { data } = await axios.get(import.meta.env.VITE_API_URL + code);
			this.coctails = [...this.coctails, data?.drinks[0]];
			this.currentCoctail = data?.drinks[0];
		},
	},
});
