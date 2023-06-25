import Link from 'next/link'

import { FaGlobeAfrica, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { BsGlobeAmericas } from 'react-icons/bs'

const continents = [
	{
		name: 'Africa',
		icon: FaGlobeAfrica,
		href: '/countries/africa',
	},
	{
		name: 'Americas',
		icon: BsGlobeAmericas,
		href: '/countries/americas',
	},
	{
		name: 'Asia',
		icon: FaGlobeAsia,
		href: '/countries/asia',
	},
	{
		name: 'Europe',
		icon: FaGlobeEurope,
		href: '/countries/europe',
	},
	{
		name: 'Oceania',
		icon: GiEarthAsiaOceania,
		href: '/countries/oceania',
	},
]

const ContinentsFilter = () => {
	return (
		<div className='flex items-center gap-6 sm:gap-4 text-slate-300 text-2xl '>
			<Link
				href={'/countries'}
				className='text-[1rem] hover:text-blue-800 transition duration-500'
			>
				All
			</Link>
			{continents.map((continent, i) => {
				return (
					<Link
						href={continent.href}
						key={i}
						className='filters-icon inline-block rounded-full hover:shadow-glow transition-all duration-500'
					>
						<continent.icon className='hover:text-blue-800 transition duration-500' />
						<div>
							<span>{continent.name}</span>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default ContinentsFilter
