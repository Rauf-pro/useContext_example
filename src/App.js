import React, { useState } from "react";
import "./App.css";
import Content from "./components/Context";

const themes = {
  dark: {
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

// 1. Create Context
export const ThemeContext = React.createContext(themes.dark);
// 2. Create Provider
function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if(theme === themes.dark){
      setTheme(themes.light);
    }else {
      setTheme(themes.dark);
    }
  }
  return (
    <div className="container">
      <button onClick={toggleTheme} >{theme === themes.dark ? "Dark Theme" : "Light Theme"}</button>
      <ThemeContext.Provider value={theme}>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
