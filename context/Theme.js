import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '@/assets/style/theme';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemtheme = Appearance.getColorScheme(); // 'light' or 'dark'
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isTheme, setIsTheme] = useState('dark');

    const toggleTheme = (theme) => {
        if (theme == 'light') {
            setIsDarkMode(false)
            setIsTheme('light')
        } else if (theme == 'dark') {
            setIsDarkMode(true)
            setIsTheme('dark')
        } else {
            if (systemtheme == 'dark') {
                setIsDarkMode(true)
                setIsTheme('system')
            } else if (systemtheme == 'dark') {
                setIsDarkMode(false)
                setIsTheme('system')
            }
        }
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, isTheme, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};