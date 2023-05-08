import { useEffect, useState } from 'react';
import styles from '../styles/DropDown.module.scss';

type Props = {
  keyword: string;
  focus: boolean;
};

export default function DropDown({ keyword, focus }: Props) {
  const [results, setResults] = useState<string[]>([]);

  const search = () => {
    // Search by keyword from database
    // Set the results using setResults
    setResults(['result 1', 'result 2', 'result 3']);
  };

  const handleResultClick = (result: string) => {
    // Go to detail page of the result
  };

  useEffect(() => {
    if (focus) {
      search();
    }
  }, [keyword, focus]);

  if (!focus || !keyword) {
    return null;
  }

  return (
    <div className={styles.dropDownWrap}>
      {results.length > 0 ? (
        results.map((result) => (
          <ul key={result} onClick={() => handleResultClick(result)}>
            {result}
          </ul>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
