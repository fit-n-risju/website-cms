import React from 'react'

import Layout from '../../components/Layout'
import ImageHeader from "../../components/ImageHeader"
import FitnessRoll from "../../components/FitnessRoll"
import { useLanguage } from '../../components/LanguageProvider'

export const FitnessPage = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  }) => {
    const { isEnglish, setLanguage } = useLanguage();
  
  return(
    <Layout>
        <ImageHeader headerImage="/img/fitness-stage.jpg" headline={isEnglish ? "GET FIT WITH US" : "WERDE FIT MIT UNS"} subhead={isEnglish ? "Be your best self with our favorite exercises and the coolest gear!" : "Erfahre mehr über unsere effektivsten Übungen und besten Produkte!"} />
        <FitnessRoll />
    </Layout>
  )
  }

  export default FitnessPage