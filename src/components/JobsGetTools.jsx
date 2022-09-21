import JobsToolsMerged from './JobsToolsMerged';

const JobsGetTools = ({ data }) => {
	if (!data.length) return data;
	return data.map(tools => <JobsToolsMerged key={tools.name} data={tools} />);
};

export default JobsGetTools;
