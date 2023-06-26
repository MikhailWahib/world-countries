import './globals.css'
import { Inter } from 'next/font/google'

import Topbar from '@/components/Topbar'
import FiltersSec from '@/components/FiltersSec'

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
			<body className={`${inter.className} bg-slate-900`}>
				<Topbar />
				{/* <main className='bg-slate-900 min-h-screen w-full'>
					<div className='mx-[5vw] my-10'>
						<FiltersSec />
						{children}
					</div>
				</main> */}
				{children}
			</body>
		</html>
	)
}
