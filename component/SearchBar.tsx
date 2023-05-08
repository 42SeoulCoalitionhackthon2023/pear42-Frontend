import { useEffect, useRef, useState } from 'react';
import styles from '../styles/SearchBar.module.scss';
import DropDown from './DropDown';

export default function SearchBar() {
  const [intraId, setIntraId] = useState<string>('');
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const goDetail = () => {
    if (intraId.length === 0) return;
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setIntraId(keyword);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target as Node)
      ) {
        setOnFocus(false);
      }
    };
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
        onFocus={() => setOnFocus(true)}
        onChange={inputHandler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            goDetail();
          }
        }}
      />
      <DropDown keyword={intraId} focus={onFocus} />
    </div>
  );
}
