import CountriesList from '@/components/CountriesList'
import { Country } from '@/types'

const getData = async (region: string): Promise<Country[]> => {
	const res = await fetch(
		`https://restcountries.com/v3.1/${
			region ? 'region/' + region : 'all'
		}?fields=name,flags,population,capital,region`
	)
	const data = await res.json()
	return data
}

interface Props {
	searchParams: {
		[key: string]: string
	}
}

const page = async ({ searchParams }: Props) => {
	const data = await getData(searchParams.region)

	return <CountriesList countries={data} />
}

export default page
