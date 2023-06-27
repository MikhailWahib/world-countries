'use client'
import { useRouter } from 'next/navigation'

const Searchbar: React.FC = () => {
	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value) {
			router.push(`/search/${e.target.value}`)
		} else {
			router.push('/')
		}
	}

	return (
		<input
			type='text'
			className='dark:bg-slate-800/50 bg-slate-200 rounded ring-1 ring-slate-700/50 px-3 dark:text-slate-50 text-slate-900 focus:outline-1 focus:outline-slate-50 py-0.5 placeholder:opacity-50'
			placeholder='Search any Country ....'
			onChange={handleChange}
		/>
	)
}

export default Searchbar
