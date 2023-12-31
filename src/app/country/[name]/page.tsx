'use client'

import Image from 'next/image'

import { Country } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
	params: {
		name: string
	}
}

const page: React.FC<Props> = ({ params }) => {
	const [data, setData] = useState<Country>()

	const getData = async (country: string) => {
		const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
		const data: Country[] = await res.json()
		setData(data[0])
	}

	useEffect(() => {
		getData(params.name)
	}, [])

	const router = useRouter()

	return (
		<div className='absolute top-0 w-full h-full dark:bg-slate-900 bg-slate-200'>
			<button
				className='inline-block relative my-7 px-2 ml-[8vw] md:my-0 md:top-14 dark:text-slate-200 text-slate-900 dark:bg-slate-800 bg-slate-300 border border-slate-500 rounded'
				onClick={() => router.back()}
			>
				Back
			</button>
			{data && (
				<main className='min-h-screen flex items-center flex-col gap-10 pt-5 px-[8vw] mb-10 md:flex-row md:px-[8vw] md:justify-between md:mb-0'>
					<div className='basis-7/12'>
						<Image
							src={data.flags.svg}
							alt={data.flags.alt}
							width={400}
							height={200}
							className='w-full rounded'
						/>
					</div>
					<div className='md:mr-3 self-start md:self-center'>
						<h1 className='text-2xl font-semibold dark:text-slate-200 text-slate-900 md:text-4xl'>
							{data.name.common}
						</h1>
						<div className='mt-5 md:flex md:gap-5 text-base'>
							<div className='flex flex-col gap-2 mb-2 dark:text-slate-200 text-slate-900'>
								<p>
									Population:
									<span className='dark:text-slate-400 text-slate-600'>
										{' '}
										{data.population}
									</span>
								</p>
								<p>
									Region:{' '}
									<span className='dark:text-slate-400 text-slate-600'>
										{' '}
										{data.region}
									</span>
								</p>
								<p>
									Sub Region:{' '}
									<span className='dark:text-slate-400 text-slate-600'>
										{data.subregion ? data.subregion : ' unknown'}
									</span>
								</p>
								<p>
									Capital:
									<span className='dark:text-slate-400 text-slate-600'>
										{data.capital ? data.capital : ' unknown'}
									</span>
								</p>
							</div>
							<div className='flex flex-col gap-2 dark:text-slate-200 text-slate-900'>
								<p>
									Currencies:
									<span className='dark:text-slate-400 text-slate-600'>
										{data.currencies ? (
											Object.entries(data.currencies).map((curr) => {
												return (
													<span className='inline-block border border-slate-600 dark:bg-slate-800 bg-slate-200 rounded px-1 mx-1'>
														{curr[1].name}
													</span>
												)
											})
										) : (
											<span> unknown</span>
										)}
									</span>
								</p>
								<p>
									Languages:
									<span className='dark:text-slate-400 text-slate-600'>
										{data.languages ? (
											Object.entries(data.languages).map((lang) => {
												return (
													<span className='inline-block border border-slate-600 dark:bg-slate-800 bg-slate-200 rounded px-1 mx-1'>
														{lang[1]}
													</span>
												)
											})
										) : (
											<span> unknown</span>
										)}
									</span>
								</p>
							</div>
						</div>
					</div>
				</main>
			)}
		</div>
	)
}

export default page
