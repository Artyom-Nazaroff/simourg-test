export type CoctailTypes = 'margarita' | 'mojito' | 'a1' | 'kir';

export interface ICoctail {
	idDrink: string;
	strAlcoholic: string;
	strCategory: string;
	strDrink: string;
	strDrinkThumb: string;
	strGlass: string;
	strIngredient1?: string;
	strIngredient2?: string;
	strIngredient3?: string;
	strIngredient4?: string;
	strIngredient5?: string;
	strMeasure1?: string;
	strMeasure2?: string;
	strMeasure3?: string;
	strMeasure4?: string;
	strMeasure5?: string;
}