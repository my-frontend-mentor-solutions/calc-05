import React from 'react'
import { useState, useEffect } from 'react'

export default function Header() {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        console.log(prefersDarkMode);
        setTheme(prefersDarkMode ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.querySelector('html').classList.remove('dark');
            localStorage.setItem('theme', 'light');
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
                <i className="fa-solid fa-moon text-[20px] text-[#4969ba]"></i>
            </div>
        </div>
    )
}
