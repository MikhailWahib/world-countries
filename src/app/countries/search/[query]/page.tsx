import CountriesList from '@/components/CountriesList'
import { Country } from '@/types'

const getData = async (query: string): Promise<Country[]> => {
	const res = await fetch(
		`https://restcountries.com/v3.1/name/${query}?fields=name,flagsname,flags,population,capital,region`
	)
	const data = await res.json()
	return data
}

interface Props {
	params: {
		query: string
	}
}

const page: React.FC<Props> = async ({ params }) => {
	const data = await getData(params.query)

	return <CountriesList countries={data} />
}

export default page
