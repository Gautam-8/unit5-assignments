import { createContext, useState } from "react";

export const ThemeContext = createContext({theme: "" , toggleTheme: () => {}});

export const ThemeContextProvider = ({children}) => {
    
    const [theme ,setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "coral" ? "aquamarine" : "coral");
        document.body.style.backgroundColor = theme;
    }

    return(
        <ThemeContext.Provider value={{ theme , toggleTheme }}> 
            
             {children}</ThemeContext.Provider>
    )

}