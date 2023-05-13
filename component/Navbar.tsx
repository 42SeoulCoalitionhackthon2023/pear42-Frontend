import Link from 'next/link';
import SearchBar from './SearchBar';
import styles from '/styles/Navbar.module.scss';
import { FaCrown } from 'react-icons/fa';
import { BsFillBarChartLineFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import logoImage from '/public/logo.png';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftWrapper}>
      <ul>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={logoImage} alt="logo" fill />
          </div>
        </Link>
      </ul>
      <ul>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </ul>
      <ul>
        <FaCrown className={styles.icon} /> {/* Ranking */}
      </ul>
      <ul>
        <BsFillBarChartLineFill className={styles.icon} /> {/* Statistics */}
      </ul>
      </div>
      <div className={styles.rightWrapper}>
        <MdSettings className={styles.icon} />
        {/* Settings */}
      </div>
    </nav>
  );
}
