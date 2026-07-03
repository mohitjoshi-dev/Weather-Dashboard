import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [tempUnit, setTempUnit] = useState(
    localStorage.getItem("tempUnit") || "c"
  );

  const [timeFormat, setTimeFormat] = useState(
    localStorage.getItem("timeFormat") || "12"
  );

  const [searchRegion, setSearchRegion] = useState(
    localStorage.getItem("searchRegion") || "india"
  );

  useEffect(() => {
    localStorage.setItem("tempUnit", tempUnit);
  }, [tempUnit]);

  useEffect(() => {
    localStorage.setItem("timeFormat", timeFormat);
  }, [timeFormat]);

  useEffect(() => {
    localStorage.setItem("searchRegion", searchRegion);
  }, [searchRegion]);

  return (
    <SettingsContext.Provider
      value={{
        tempUnit,
        setTempUnit,
        timeFormat,
        setTimeFormat,
        searchRegion,
        setSearchRegion,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}