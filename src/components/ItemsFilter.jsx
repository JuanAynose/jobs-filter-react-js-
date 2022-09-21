import ItemTagFilter from './ItemTagFilter';

const ItemsFilter = ({ tagName }) => {
	if (!tagName) return tagName;

	return tagName.map(jobsTagName => (
		<ItemTagFilter key={jobsTagName} jobsTagName={jobsTagName} />
	));
};

export default ItemsFilter;
