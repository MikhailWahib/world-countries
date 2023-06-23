'use client'
import CountryCard from '@/components/CountryCard'
import { Country } from '@/types/Country'

type Props = {
	countries: Country[]
}

const CountriesList: React.FC<Props> = ({ countries }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
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
	)
}

export default CountriesList
