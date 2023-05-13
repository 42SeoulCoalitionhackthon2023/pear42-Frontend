import styles from '/styles/MainPage.module.scss';
import Image from 'next/image';
import { useState } from 'react';

type MainProfileInfo= {
    profileImage: string;
    intraId: string;
    blackhole: number;
    circle: number;
    totalEval: number;
    weeklyEval: number;
    outstanding: number;
    rate: number;
    wordCount: number;
    time: number;
}

export default function MainPage() {
    const [mainProfileInfo, setMainProfileInfo] = useState<MainProfileInfo>(
        {
            profileImage: "/profile.png",
            intraId: "sungwook",
            blackhole: 100,
            circle: 2,
            totalEval: 100,
            weeklyEval: 50,
            outstanding: 20,
            rate: 50,
            wordCount: 100,
            time: 120,
        }
    );
    //api call
    return (
        <div className={styles.mainPageWrapper}>
            <div className={styles.profileInfoWrapper}>
                <div className={styles.profileImage}>
                    {/* <Image src="/profile.png" alt="profile" width={200} height={200} /> */}
                </div>
                <div className={styles.profileInfo}>
                <div className={styles.intraId}>
                    {mainProfileInfo.intraId}
                </div>
                <div className={styles.blackhole}>
                    {mainProfileInfo.blackhole}
                </div>
                <div className={styles.circle}>
                    {mainProfileInfo.circle}
                </div>
                <div className={styles.totalEval}>
                    {mainProfileInfo.totalEval}
                </div>
                <div className={styles.weeklyEval}>
                    {mainProfileInfo.weeklyEval}
                </div>
                </div>
            </div>
            <div className={styles.profileGrade}>
                <div className={styles.gradePic}>
                </div>
                <div className={styles.rates}>
                    <div className={styles.gradeGraph}>
                    </div>
                    <div className={styles.gradeInfo}>
                    </div>
                </div>
            </div>
        </div>
    )
}