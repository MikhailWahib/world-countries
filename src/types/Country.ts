export interface Country {
	name: {
		common: string
		nativeName: string
	}
	flags: {
		png: string
		svg: string
		alt: string
	}
	population: number
	region: string
	subregion: string
	capital: string
	currencies: Array<{name: string}>
	languages: Array<string>
}