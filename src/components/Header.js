import React from 'react'
import { useState, useEffect } from 'react'

// const THEME_SYSTEM = -1;
// const THEME_LIGHT = 0;
// const THEME_DARK = 1;

export default function Header() {

    // const [theme, setTheme] = useState();

    let isSystemDark = window.matchMedia("(prefers-color-scheme: dark)");
    let abc = isSystemDark.matches;
    const initialTheme = abc ? 'dark' : 'light';
    const [theme, setTheme] = useState(initialTheme);

    isSystemDark.addEventListener('change',() => {
        const newIsSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (newIsSystemDark !== isSystemDark.matches) abc = newIsSystemDark;
    });

    const finalTheme = isSystemDark.matches && localStorage.getItem('darkMode');

    console.log(finalTheme);

    useEffect(() => {
        setTheme(finalTheme ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        isSystemDark.matches ? setTheme('dark') : setTheme('light');
    }, [isSystemDark.matches]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', true);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', false);
        }
    }, [theme]);


    const themeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='flex justify-between mb-3'>
            <p className='font-bold'>Calc</p>
            <div className='flex items-center'>
                <i className="fa-solid fa-sun text-[20px] text-[#f1bf40]"></i>
                <label className="switch">
                    <input
                        type="checkbox"
                        className='switch-input'
                        checked={theme === 'dark'}
                        onChange={themeToggle}
                    />
                    <span className="slider bg-[#b8b8b8] dark:bg-keypad-back-dark"></span>
                </label>
                <i className="fa-solid fa-sun text-[20px] text-[#f1bf40]"></i>
                <label className="switch">
                    <input
                        type="checkbox"
                        className='switch-input'
                        checked={theme === 'dark'}
                        onChange={themeToggle}
                    />
                    <span className="slider bg-[#b8b8b8] dark:bg-keypad-back-dark"></span>
                </label>
                <i className="fa-solid fa-moon text-[20px] text-[#4969ba]"></i>
            </div>
        </div>
    )
}
