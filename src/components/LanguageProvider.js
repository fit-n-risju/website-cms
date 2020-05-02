import React from 'react';

const LanguageContext = React.createContext({
    language: 'EN',
    isEnglish: true,
    setLanguage: () => {},
});

const LanguageProvider = ({ children }) => {
    const setLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('siteLanguage') : 'EN';
    const [language, updateLanguage] = React.useState(setLanguage || 'EN');

    const setLanguagePreference = (lang) => {
        updateLanguage(lang);

        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('siteLanguage', lang.toString());
        }
    }

    return (
        <LanguageContext.Provider value={{
            language,
            isEnglish: language === 'EN',
            setLanguage: setLanguagePreference,
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => React.useContext(LanguageContext);

export default LanguageProvider;
