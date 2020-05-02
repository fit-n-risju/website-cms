const React = require("react")
const LanguageProvider = require("./src/components/LanguageProvider").default

exports.wrapRootElement = ({ element }) => {
    return (
        <LanguageProvider>{element}</LanguageProvider>
    )
}