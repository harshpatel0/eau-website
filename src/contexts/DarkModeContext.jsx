import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  function getDarkModeSettingFromLocalStorage() {
    // Attempt to retrieve the darkMode value from local storage
    const darkModeSettingFromLocalStorage =
      window.localStorage.getItem("darkMode");

    // Check if the value exists and is a valid JSON string
    if (darkModeSettingFromLocalStorage !== null) {
      try {
        return JSON.parse(darkModeSettingFromLocalStorage);
      } catch (error) {
        console.error("Error parsing dark mode setting:", error);
        return false; // Fallback to default value
      }
    }

    return false; // Default value
  }

  function toggleTheme() {
    setDarkMode((d) => !d);
  }

  const [darkMode, setDarkMode] = useState(
    getDarkModeSettingFromLocalStorage()
  );

  useEffect(() => {
    // Set in LocalStorage
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.body.classList.add("app-dark");
      document.documentElement.classList.add("app-dark");

      document.body.classList.remove("app-light");
      document.documentElement.classList.remove("app-light");
    } else {
      document.body.classList.add("app-light");
      document.documentElement.classList.add("app-light");

      document.body.classList.remove("app-dark");
      document.documentElement.classList.remove("app-dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
