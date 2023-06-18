import { Country } from '@/types/Country'
import Topbar from '@/components/Topbar'
import CountryCard from '@/components/CountryCard'
import Filters from '@/components/Filters'
import Searchbar from '@/components/Searchbar'

const getData = async () => {
	const res = await fetch(
		'https://restcountries.com/v3.1/all?fields=name,flags'
	)
	return res.json()
}

export default async function Home() {
	const countries: Array<Country> = await getData()

	return (
		<main className='bg-slate-900 min-h-screen w-full'>
			<Topbar />
			<div className='mx-[5vw] my-10'>
				<div className='flex flex-col items-center gap-5 mb-10 sm:flex-row sm:justify-between sm:gap-0'>
					<Searchbar />
					<Filters />
				</div>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-x-10 gap-y-10'>
					{countries.map((country, i) => {
						return (
							<CountryCard
								key={i}
								name={country.name.common}
								flag={country.flags.png}
							/>
						)
					})}
				</div>
			</div>
		</main>
	)
}
