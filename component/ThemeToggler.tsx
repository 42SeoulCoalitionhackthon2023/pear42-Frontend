import React from 'react'
import { useTheme } from 'next-themes';
import { styles } from './ThemeToggler.module.scss';

const ThemeToggler = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const curTheme = theme === 'system' ? systemTheme : theme;
	
	return (
		<button
			onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
			className='ThemeToggler'
		>
			Toggle Mode
		</button>
	)
}

export default ThemeToggler;