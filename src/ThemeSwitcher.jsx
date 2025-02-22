import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = ()=>{

    const {theme, toggleTheme}= useContext(ThemeContext);

    return(
        <header style={{backgroundColor:theme=='light'?'#f1f1f1':'#222'}}>
            <p style={{color:theme=='light'?'#000':'#fff'}}>Current Theme:{theme}</p>
            <button onClick={toggleTheme}>Switch to {theme=='light'?'Dark Mode':'Light Mode'}</button>
        </header>
    )

}

export default ThemeSwitcher;