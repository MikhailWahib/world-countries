import { FaGlobeAfrica, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { BsGlobeAmericas } from 'react-icons/bs'

const continents = [
	{
		name: 'Africa',
		icon: FaGlobeAfrica,
	},
	{
		name: 'Americas',
		icon: BsGlobeAmericas,
	},
	{
		name: 'Asia',
		icon: FaGlobeAsia,
	},
	{
		name: 'Europa',
		icon: FaGlobeEurope,
	},
	{
		name: 'Oceania',
		icon: GiEarthAsiaOceania,
	},
]

const Filters = () => {
	return (
		<div className='group relative flex gap-6 sm:gap-3 text-slate-300 text-2xl'>
			{continents.map((continent, i) => {
				return (
					<button
						key={i}
						className='filters-icon rounded-full hover:shadow-glow transition-all duration-500'
					>
						<continent.icon />
						<span>{continent.name}</span>
					</button>
				)
			})}
		</div>
	)
}

export default Filters
