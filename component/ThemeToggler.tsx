/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './ThemeToggler.module.scss';

export function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <button
      onClick={darkModeHandler}
      type="button"
      className={styles.ThemeToggler}
    >
      { isDarkMode ? 'light-mode' : 'dark-mode' }
    </button>
  );
}
