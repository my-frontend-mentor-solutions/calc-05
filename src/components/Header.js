import React from 'react'
import { useState, useEffect } from 'react'

const THEME_SYSTEM = "system";
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

export default function Header() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? THEME_SYSTEM);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", _ => {
        if (theme === THEME_SYSTEM) {
            setThemeClass(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    });

    useEffect(() => {
        switch (theme) {
            case THEME_SYSTEM:
                let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setThemeClass(isDark);
                break;
            case THEME_LIGHT:
                setThemeClass(false);
                break;
            case THEME_DARK:
                setThemeClass(true);
                break;
        }
    }, [theme]);

    const setThemeClass = (dark) => {
        dark ?
            document.documentElement.classList.add('dark') :
            document.documentElement.classList.remove('dark');
    }

    const onThemeChange = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    return (
        <div className='flex justify-between mb-3'>
            <p className='font-bold'>Calc</p>
            <div className='flex items-center bg-[#00000015] px-2 rounded-md'>
                <i
                    className={` ${theme === THEME_SYSTEM ? "text-white" : "text-[#252525]"} cursor-pointer fa-solid fa-laptop text-[22px] mr-1`}
                    onClick={() => onThemeChange(THEME_SYSTEM)}></i>
                <i
                    className={` ${theme === THEME_LIGHT ? "text-[#e9b93e]" : "text-[#252525]"} cursor-pointer fa-solid fa-sun text-[22px] mx-1`}
                    onClick={() => onThemeChange(THEME_LIGHT)}></i>
                <i
                    className={` ${theme === THEME_DARK ? "text-[#5d82dd]" : "text-[#252525]"} cursor-pointer fa-solid fa-moon text-[22px]  ml-1`}
                    onClick={() => onThemeChange(THEME_DARK)}></i>
            </div>
        </div>
    )
}
