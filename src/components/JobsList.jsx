import { useState } from 'react';
import { JobsContext } from '../lib/contexts/JobsContext';
import JobsFilterForm from './JobsFilterForm';
import JobsItemsFilter from './JobsItemsFilter';
import style from './JobsList.module.css';

const JobsList = ({ jobsListData }) => {
	const { filterByJobs, resetFilters, ...setFiltersFunctions } = userFilters();

	const jobsFiltered = filterJobs(jobsListData, filterByJobs);

	return (
		<div className={style.container}>
			{filterByJobs && (
				<JobsFilterForm
					filterByJobs={filterByJobs}
					resetFilters={resetFilters}
					{...setFiltersFunctions}
				/>
			)}
			<div className={style.content}>
				<JobsContext.Provider
					value={{ ...setFiltersFunctions, filterByJobs, resetFilters }}
				>
					<JobsItemsFilter jobsInfo={jobsFiltered} />
				</JobsContext.Provider>
			</div>
		</div>
	);
};

const userFilters = () => {
	const [filters, setFilters] = useState({
		filterByJobs: '',
		resetFilters: false
	});

	const setfilterJobs = filterByJobs =>
		setFilters({
			...filters,
			filterByJobs
		});

	const setResetFilter = resetFilters =>
		setFilters({
			...filters,
			filterByJobs: '',
			resetFilters
		});

	return {
		...filters,
		setfilterJobs,
		setResetFilter
	};
};

const filterJobs = (jobsListData, filterByJobs) => {
	if (!jobsListData.length) return jobsListData;

	const jobsFilterByTag = [];
	if (filterByJobs.length) {
		for (const itemJobs of jobsListData) {
			const margeTools = [];
			margeTools.push(...itemJobs.languages);
			margeTools.push(...itemJobs.tools);
			margeTools.push(itemJobs.role);
			margeTools.push(itemJobs.level);

			if (filterByJobs.length <= 1) {
				const filterByOne = margeTools.filter(eleme =>
					eleme.includes(filterByJobs)
				);
				if (filterByOne.length) jobsFilterByTag.push(itemJobs);
			} else {
				const intersection = margeTools.filter(element =>
					filterByJobs.includes(element)
				);
				if (intersection.length === filterByJobs.length) {
					jobsFilterByTag.push(itemJobs);
				}
			}
		}
		return jobsFilterByTag;
	}

	return jobsListData;
};

export default JobsList;
