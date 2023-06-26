import ContinentsFilter from './ContinentsFilter'
import Searchbar from './Searchbar'

const FiltersSec: React.FC = () => {
	return (
		<div className='flex flex-col items-center gap-5 mx-[5vw] my-10 sm:flex-row sm:justify-between sm:gap-0'>
			<Searchbar />
			<ContinentsFilter />
		</div>
	)
}

export default FiltersSec
