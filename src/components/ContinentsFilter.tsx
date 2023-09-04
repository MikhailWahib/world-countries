import Link from 'next/link'

import { FaGlobeAfrica, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { BsGlobeAmericas } from 'react-icons/bs'

const continents = [
	{
		name: 'Africa',
		icon: FaGlobeAfrica,
		href: '/?region=africa',
	},
	{
		name: 'Americas',
		icon: BsGlobeAmericas,
		href: '/?region=americas',
	},
	{
		name: 'Asia',
		icon: FaGlobeAsia,
		href: '/?region=asia',
	},
	{
		name: 'Europe',
		icon: FaGlobeEurope,
		href: '/?region=europe',
	},
	{
		name: 'Oceania',
		icon: GiEarthAsiaOceania,
		href: '/?region=oceania',
	},
]

const ContinentsFilter = () => {
	return (
		<div className='flex items-center gap-6 sm:gap-4 dark:text-slate-300 text-slate-800 text-2xl '>
			<Link
				href={'/'}
				className='text-[1rem] font-bold hover:text-blue-800 transition'
			>
				All
			</Link>
			{continents.map((continent, i) => {
				return (
					<Link
						href={continent.href}
						key={i}
						className='filters-icon inline-block rounded-full transition-all'
					>
						<continent.icon className='hover:text-blue-800 transition' />
						<div className='dark:bg-black/50 bg-black/75  text-white'>
							<span>{continent.name}</span>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default ContinentsFilter
