import { useContext } from 'react';
import { JobsContext } from '../lib/contexts/JobsContext';
import JobsGetTools from './JobsGetTools';
import style from './JobsItems.module.css';

let arrAccept = [];

const JobsItems = ({
	company,
	contract,
	featured,
	languages,
	level,
	location,
	logo,
	newPost,
	position,
	postedAt,
	role,
	tools
}) => {
	const ToLang = [...tools, ...languages];
	const { setfilterJobs, resetFilters, setResetFilter } =
		useContext(JobsContext);

	if (resetFilters === true) {
		arrAccept = [];
		setResetFilter(false);
	}

	return (
		<div className={style.job__item}>
			<div className={style.content__left}>
				<div className={style.job__logo}>
					<img className={style.logo} src={logo} alt='logo company' />
				</div>
				<div>
					<div className={style.company__info}>
						<p className={style.subtext__title}>{company}</p>
						{newPost && <span className={style.post__alert}>new!</span>}
						{featured && <span className={style.post__alert}>featured</span>}
					</div>
					<div className={style.company__clauses}>
						<p className={style.subtext__title}>{position}</p>
						<ul className={style.job__rules}>
							<li className={style.item__rules}>{postedAt}</li>
							<li className={style.item__rules}>{contract}</li>
							<li className={style.item__rules}>{location}</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={style.content__right}>
				<ul
					className={style.list__tools}
					onClick={ev => {
						if (ev.target.tagName === 'LI') {
							arrAccept.push(ev.target.textContent);
							const uniqueChars = [...new Set(arrAccept)];
							setfilterJobs(uniqueChars);
						}
					}}
				>
					<li className={style.item__tools}>{role}</li>
					<li className={style.item__tools}>{level}</li>
					<JobsGetTools data={ToLang} />
				</ul>
			</div>
		</div>
	);
};

export default JobsItems;
