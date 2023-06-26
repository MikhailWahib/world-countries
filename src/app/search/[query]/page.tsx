import CountriesList from '@/components/CountriesList'
import FiltersSec from '@/components/FiltersSec'
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

	return (
		<main className='bg-slate-900 min-h-screen w-full'>
			<div className='mx-[5vw] my-10'>
				<FiltersSec />
				<CountriesList countries={data} />
			</div>
		</main>
	)
}

export default page
