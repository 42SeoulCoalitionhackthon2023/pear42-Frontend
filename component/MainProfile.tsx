import styles from '/styles/MainProfile.module.scss';
import Image from 'next/image';
import gradePic from '/public/gradePic.png';
import { useState } from 'react';

type MainProfileInfo = {
  profileImage: string;
  intraId: string;
  blackhole: number;
  campus: string;
  student: string;
  totalEval: number;
  weeklyEval: number;
  outstanding: number;
  rate: number;
  wordCount: number;
  timeCount: number;
};

export default function MainProfile() {
  const [mainProfileInfo, setMainProfileInfo] = useState<MainProfileInfo>({
    profileImage:
      'https://cdn.intra.42.fr/users/9e1614c6297185aabebe3006c3a984ef/small_sungwook.jpg',
    intraId: 'sungwook',
    blackhole: 100,
    campus: 'seoul',
    student: 'cadet',
    totalEval: 100,
    weeklyEval: 50,
    outstanding: 20,
    rate: 50,
    wordCount: 100,
    timeCount: 120,
  });

  const coalitionCover =
    'https://cdn.intra.42.fr/coalition/cover/86/gon_cover.jpg';
  const {
    profileImage,
    intraId,
    blackhole,
    campus,
    student,
    totalEval,
    weeklyEval,
    outstanding,
    rate,
    wordCount,
    timeCount,
  } = mainProfileInfo;

  //api call
  return (
    <div
      className={styles.mainPageWrapper}
      style={{
        backgroundImage: `url(${coalitionCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.profileInfoWrapper}>
        <div className={styles.profileImageWrapper}>
          <Image
            className={styles.profileImage}
            src={profileImage}
            alt="profile"
            fill
          />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.idWrapper}>
            <div className={styles.intraId}>{intraId}</div>
            <div className={styles.blackhole}>{blackhole}</div>
          </div>
          <div className={styles.campusWrapper}>
            <div>#42{campus}</div>
            <div>#{student}</div>
          </div>
          <div className={styles.evalWrapper}>
            <div className={styles.weekWrapper}>
              <div>week</div>
              <div className={styles.weeklyEval}>{weeklyEval}</div>
            </div>
            /
            <div className={styles.totalWrapper}>
              <div>total</div>
              <div className={styles.totalEval}>{totalEval}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileGrade}>
        <div className={styles.rates}>
          <Image
            className={styles.gradePic}
            src={gradePic}
            alt="grade"
            width={200}
            height={200}
          />
          <div className={styles.gradeGraph}>
            <div>Outstanding Flag (%)</div>
            <progress
              className={styles.progressbar}
              value={outstanding}
              max="100"
            ></progress>
            <div>Rate above 80 (%)</div>
            <progress
              className={styles.progressbar}
              value={rate}
              max="100"
            ></progress>
            <div className={styles.gradeInfo}>
              <div className={styles.wordCount}>
                <div>{wordCount}</div>
                <div>Comment (word count)</div>
              </div>
              <div className={styles.timeCount}>
                <div>{timeCount}</div>
                <div>Feedback Time (min)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
