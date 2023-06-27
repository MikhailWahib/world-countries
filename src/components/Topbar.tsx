'use client'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeProvider'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const Topbar = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const handleThemeToggle = () => {
		setTheme((prev: string) => (prev === 'dark' ? 'light' : 'dark'))
	}

	return (
		<header className='w-full h-14 dark:bg-slate-950/50 bg-slate-200 dark:text-slate-200 text-slate-900 flex justify-between items-center px-[5vw] shadow-lg'>
			<h1 className='text-xl font-bold'>World Countries</h1>
			<div>
				<button
					className='block transition hover:text-blue-500'
					onClick={handleThemeToggle}
				>
					{theme === 'dark' ? (
						<BsFillSunFill size={20} />
					) : (
						<BsFillMoonFill size={20} />
					)}
				</button>
			</div>
		</header>
	)
}

export default Topbar
