import { ItemsContext } from '../lib/contexts/ItemsContext';
import ItemsFilter from './ItemsFilter';
import style from './JobsFilterForm.module.css';

const JobsFilterForm = ({
	setResetFilter,
	resetFilters,
	filterByJobs,
	setfilterJobs
}) => {
	return (
		<div className={style.filter__jobs}>
			<div className={style.wrapper_tags}>
				<ItemsContext.Provider
					value={{ filterByJobs, setfilterJobs, setResetFilter }}
				>
					<ItemsFilter tagName={filterByJobs} />
				</ItemsContext.Provider>
			</div>
			<button
				className={style.button_clear}
				onClick={() => {
					setfilterJobs('');
					setResetFilter(true);
				}}
			>
				Clear
			</button>
		</div>
	);
};

export default JobsFilterForm;
