import { Inter } from 'next/font/google';
import Feedback from '../component/Feedback';
import MainProfile from '../component/MainProfile';
import styles from '/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <MainProfile />
      <Feedback />
    </div>
  );
}
