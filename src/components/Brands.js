import React from 'react'
import "./Brands.css"
import { withPrefix } from "gatsby"
import { useLanguage } from '../components/LanguageProvider'

const Brands = () => {

    const { isEnglish, setLanguage } = useLanguage();

return (
    <div className="brands">
        <div className="content">
        <h2>{isEnglish ? "BRANDS WE'RE WORKING WITH" : "MARKEN-PARTNERSCHAFTEN"} </h2>
        <div className="logo-row">
        </div>
        </div>
    </div>
)
}

export default Brands