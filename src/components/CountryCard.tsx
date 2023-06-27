import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	name: string
	flag: string
	capital: string
	population: number
	region: string
}

const CountryCard: React.FC<Props> = ({
	name,
	flag,
	capital,
	population,
	region,
}) => {
	return (
		<div className='group dark:bg-slate-800/50 bg-slate-200 rounded-xl w-full max-w-[280px] h-80 overflow-clip ring-1 ring-slate-700/50 transition duration-500 transform hover:scale-[1.03]'>
			<Link href={`/country/${name}`}>
				<Image
					src={flag}
					alt={`${name}-flag`}
					width={500}
					height={500}
					className='h-44 aspect-video'
				/>
				<div className='px-5 py-5 dark:text-slate-200 text-slate-900'>
					<p className='font-bold text-lg leading-4 transition duration-500 group-hover:text-blue-800'>
						{name}
					</p>
					<div className='mt-2 text-md font-light'>
						<p>
							Capital:{' '}
							<span className='dark:text-slate-300 text-slate-800 italic'>
								{capital}
							</span>
						</p>
						<p>
							Region:{' '}
							<span className='dark:text-slate-300 text-slate-800 italic'>
								{region}
							</span>
						</p>
						<p>
							Population:{' '}
							<span className='dark:text-slate-300 text-slate-800 italic'>
								{population}
							</span>
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default CountryCard
