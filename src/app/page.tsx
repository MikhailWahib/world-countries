import { Country } from '@/types/Country'
import Topbar from '@/components/Topbar'
import Filters from '@/components/Filters'
import Searchbar from '@/components/Searchbar'
import CountriesList from '@/components/CountriesList'

const getData = async (): Promise<Country[]> => {
	const res = await fetch(
		'https://restcountries.com/v3.1/all?fields=name,flags'
	)
	return res.json()
}

export default async function Home() {
	const countries = await getData()

	return (
		<main className='bg-slate-900 min-h-screen w-full'>
			<Topbar />
			<div className='mx-[5vw] my-10'>
				<div className='flex flex-col items-center gap-5 mb-10 sm:flex-row sm:justify-between sm:gap-0'>
					<Searchbar />
					<Filters />
				</div>
				<CountriesList countries={countries} />
			</div>
		</main>
	)
}
