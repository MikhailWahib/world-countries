'use client'
import { useEffect, useState } from 'react'
import Topbar from '@/components/Topbar'
import CountryCard from '@/components/CountryCard'
import Searchbar from '@/components/Searchbar'
import Filters from '@/components/Filters'
import ReactPaginate from 'react-paginate'

type Props = {
	countries: Array<{ name: { common: string }; flags: { png: string } }>
}

const CountriesList = ({ countries }: Props) => {
	// // PAGINATION !!!!!
	// const [itemOffset, setItemOffset] = useState(0)

	// const itemsPerPage = 12
	// const endOffset = itemOffset + itemsPerPage
	// const currentItems = countries.slice(itemOffset, endOffset)
	// const pageCount = Math.ceil(countries.length / itemsPerPage)

	// // Invoke when user clicks to request another page.
	// const handlePageClick = (event: any) => {
	// 	const newOffset = (event.selected * itemsPerPage) % countries.length
	// 	setItemOffset(newOffset)
	// 	window.scrollTo({ top: 0, behavior: 'smooth' })
	// }

	return (
		<div className=''>
			{/* <div className='w-full flex justify-between px-[7vw] mt-5'>
				<Searchbar />
				<Filters />
			</div> */}
			<div className=''></div>
			{/* <ReactPaginate
				breakLabel='...'
				nextLabel='>'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				previousLabel='<'
				renderOnZeroPageCount={null}
				containerClassName='flex justify-center items-center w-[80%] sm:w-fit  mb-5 mx-auto md:ml-auto md:mr-[5vw] rounded bg-slate-800/50 ring-1 ring-slate-700/50'
				pageClassName='h-8 w-8 mx-1 rounded-full flex justify-center items-center text-gray-400'
				breakClassName='h-8 w-8 mx-1 rounded-full flex justify-center items-center text-gray-400'
				previousClassName='h-8 w-8 mx-1 rounded-full flex justify-center items-center text-gray-400'
				nextClassName='h-8 w-8 mx-1 rounded-full flex justify-center items-center text-gray-400'
				activeClassName='bg-gray-700 text-white'
				disabledClassName='opacity-50 cursor-not-allowed'
			/> */}
		</div>
	)
}

export default CountriesList
