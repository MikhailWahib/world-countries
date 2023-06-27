import CountriesList from '@/components/CountriesList'
import FiltersSec from '@/components/FiltersSec'
import { Country } from '@/types'

const getData = async (url: any): Promise<Country[]> => {
	const res = await fetch(
		`https://restcountries.com/v3.1/region/${url}?fields=name,flags,population,capital,region`
	)
	const data = await res.json()
	return data
}

type Props = {
	params: {
		region: string
	}
}

const page: React.FC<Props> = async ({ params }) => {
	const data = await getData(params.region)

	return <CountriesList countries={data} />
}

export default page
