import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	name: string
	flag: string
}

const CountryCard = ({ name, flag }: Props) => {
	return (
		<div className='bg-slate-800/50 rounded-xl w-full max-w-[280px] h-80 overflow-clip ring-1 ring-slate-700/50 hover:shadow-glow-1 transition-all duration-500'>
			<Link href={`/${name}`}>
				<Image
					src={flag}
					alt={`${name}-flag`}
					width={500}
					height={500}
					className='h-44'
				/>
			</Link>
		</div>
	)
}

export default CountryCard
