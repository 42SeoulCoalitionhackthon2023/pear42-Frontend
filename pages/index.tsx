import { Inter } from 'next/font/google';
import MainProfile from '/component/MainProfile';
import styles from '/styles/Home.module.css';

export default function Home() {
  return (<div className={styles.main}>
    <MainProfile />
  </div>);
}
