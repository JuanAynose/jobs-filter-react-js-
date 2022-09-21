import { useContext } from 'react';
import { ItemsContext } from '../lib/contexts/ItemsContext';
import IconRemove from './icons/IconRemove';
import style from './ItemTagFilter.module.css';
const ItemTagFilter = ({ jobsTagName }) => {
	const { filterByJobs, setfilterJobs, setResetFilter } =
		useContext(ItemsContext);
	return (
		<div
			className={style.item_tag}
			onClick={() => {
				const newArr = filterByJobs.filter(object => {
					return object !== jobsTagName;
				});
				if (newArr.length) setfilterJobs(newArr);
				else {
					setfilterJobs('');
					setResetFilter(true);
				}
			}}
		>
			<span>{jobsTagName}</span>
			<button className={style.icon_remove}>
				<IconRemove className={style.cancel_click} />
			</button>
		</div>
	);
};

export default ItemTagFilter;
