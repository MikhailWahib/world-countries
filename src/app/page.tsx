import CountriesList from '@/components/CountriesList'
import FiltersSec from '@/components/FiltersSec'
import { Country } from '@/types'

const getData = async (): Promise<Country[]> => {
	const res = await fetch(
		`https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region`
	)
	const data = await res.json()
	return data
}

const page: React.FC = async () => {
	const data = await getData()

	return <CountriesList countries={data} />
}

export default page
