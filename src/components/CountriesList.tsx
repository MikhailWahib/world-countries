import CountryCard from '@/components/CountryCard'
import { Country } from '@/types'

interface Props {
	countries: Country[]
}

const CountriesList: React.FC<Props> = ({ countries }) => {
	return (
		<div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-[4vw]'>
			{countries.length > 0 ? (
				countries.map((country, i) => {
					return (
						<CountryCard
							key={i}
							name={country.name.common}
							flag={country.flags.png}
							capital={country.capital}
							region={country.region}
							population={country.population}
						/>
					)
				})
			) : (
				<p className='text-slate-200'>Not Found</p>
			)}
		</div>
	)
}

export default CountriesList
