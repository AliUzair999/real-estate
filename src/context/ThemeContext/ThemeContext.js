import react, { createContext, useState } from 'react'



// Create the theme context
const ThemeContext = createContext();

// Define a custom provider component for the theme context
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Value to be provided by the theme context
    const themeContextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };










