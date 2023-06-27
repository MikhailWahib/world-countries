'use client'
import { createContext, useState } from 'react'

interface Props {
	children: React.ReactNode
}

export const ThemeContext = createContext<any>(null)

const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState('dark')
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={`${theme === 'dark' ? 'dark' : ''}`}>{children}</div>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
