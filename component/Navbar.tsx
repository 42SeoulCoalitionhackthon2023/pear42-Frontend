import Link from 'next/link'
import styles from '/styles/component/Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
    	<ul>
        <Link href="/">
          PEAR42
        </Link>
			</ul>
			<ul>
		  	SearchBar{/* <SearchBar /> */}
			</ul>
			<ul>
		  	Ranking
			</ul>
			<ul>
			  Statistics
			</ul>
			<ul>
			  Settings
			</ul>
 	 </nav>
  )
}