import JobsItems from './JobsItems';

const JobsItemsFilter = ({ jobsInfo }) => {
	if (!jobsInfo) return alert('Not data to show');
	return jobsInfo.map(jobsOp => <JobsItems key={jobsOp.id} {...jobsOp} />);
};

export default JobsItemsFilter;
