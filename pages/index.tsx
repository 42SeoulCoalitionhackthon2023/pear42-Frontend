import { useEffect, useState } from 'react';
import styles from '/styles/Home.module.css';

type TProfile = {
	intraImage: string;
	intraId: string;
	blackhole: Date;
	campus: string;
	cursus: string;
	week: number;
	total: number;
	feedbackLevel: number;
	outstanding: number;
	passRate: number;
	wordCount: number;
	feedbackTime: number;
};

export default function Home() {
const [profileInfo, setProfileInfo] = useState<TProfile>({
	intraImage: '',
	intraId: '',
	blackhole: new Date(),
	campus: '',
	cursus: '',
	week: 0,
	total: 0,
	feedbackLevel: 0,
	outstanding: 0,
	passRate: 0,
	wordCount: 0,
	feedbackTime: 0,
	});

	useEffect(() => {
		fetch('/api/profile') // props를 받아 intradId로 api 요청 필요
			.then((res) => res.json())
			.then((data) => {
				setProfileInfo(data);
			});
	}, []);

  return (<div className={styles.main}>
	<Profile info={profileInfo}/>
  </div>);
}
