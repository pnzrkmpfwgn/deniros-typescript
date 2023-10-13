import { useState, useContext, createContext, ReactNode, MouseEvent } from "react";

type LanguageUpdateContextType = {
  value: () => void;
};

interface LanguageContextType {
  value: string;
}

const LanguageContext = createContext<LanguageContextType>({ value: "" });
const LanguageUpdateContext = createContext<LanguageUpdateContextType>({
  value: () => {},
});

interface Props {
  children: ReactNode;
}

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const useUpdateLanguage = () => {
  return useContext(LanguageUpdateContext);
};

const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState("tr");
  LanguageProvider.displayName = "language provider";

  const handleClick = () => {
    if (language !== "en") {
      setLanguage("en");
    } else {
      setLanguage("tr");
    }
  };

  return (
    <LanguageContext.Provider value={{ value: language }}>
      <LanguageUpdateContext.Provider value={{ value: handleClick }}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
