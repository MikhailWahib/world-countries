import FiltersSec from '@/components/FiltersSec'

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='bg-slate-900 min-h-screen w-full'>
			<div className='mx-[5vw] my-10'>
				<FiltersSec />
				{children}
			</div>
		</main>
	)
}
