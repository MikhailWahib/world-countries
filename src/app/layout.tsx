import './globals.css'
import { Inter } from 'next/font/google'

import Topbar from '@/components/Topbar'
import FiltersSec from '@/components/FiltersSec'
import ThemeProvider from '@/context/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'World Countries',
	description: 'Explore World Countries',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<ThemeProvider>
					<div className='min-h-screen w-full bg-slate-200 dark:bg-slate-900'>
						<Topbar />
						<FiltersSec />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
