import { useEffect, useRef, useState } from 'react';
import styles from '../styles/SearchBar.module.scss';

export default function SearchBar() {
  const [intraId, setIntraId] = useState<string>('');
  const [dropdown, setDropDown] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const goDetail = () => {
    if (intraId.length === 0) return;
    setDropDown(false);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setIntraId(keyword);
    if (keyword.length > 0) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    )
      setDropDown(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className={styles.searchBarWrap}>
      <input
        type="text"
        value={intraId}
        placeholder="search by intra id"
        onChange={inputHandler}
        onFocus={() => setDropDown(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            goDetail();
          }
        }}
      />
    </div>
  );
}
