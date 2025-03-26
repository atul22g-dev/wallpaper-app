import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '@/assets/style/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isTheme, setIsTheme] = useState('dark');

    const toggleTheme = (theme) => {
        if(theme == 'light'){
            setIsDarkMode(false)
            setIsTheme('light')
        } else if(theme == 'dark'){
            setIsDarkMode(true)
            setIsTheme('dark')
        }
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode,isTheme, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};