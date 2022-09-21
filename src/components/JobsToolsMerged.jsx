import style from './JobsItems.module.css';

const JobsToolsMerged = ({ data }) => {
	return <li className={style.item__tools}>{data}</li>;
};

export default JobsToolsMerged;
