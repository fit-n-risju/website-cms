import React from 'react';

const LanguageContext = React.createContext('EN');

const LanguageProvider = ({ children }) => {
    const setLanguage = window && window.localStorage ? window.localStorage.getItem('siteLanguage') : 'EN';
    const [language, updateLanguage] = React.useState(setLanguage || 'EN');

    const setLanguagePreference = (lang) => {
        updateLanguage(lang);

        if (window.localStorage) {
            window.localStorage.setItem('siteLanguage', lang.toString());
        }
    }

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage: setLanguagePreference,
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => React.useContext(LanguageContext);

export default LanguageProvider;
