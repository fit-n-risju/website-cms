import React from 'react'

import Layout from '../../components/Layout'
import ImageHeader from "../../components/ImageHeader"
import FitnessRoll from "../../components/FitnessRoll"
import { useLanguage } from '../../components/LanguageProvider'
import { Helmet } from "react-helmet"

export const FitnessPage = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  }) => {
    const { isEnglish, language } = useLanguage();
  
    const headline = isEnglish ? "GET FIT WITH US" : "WERDE FIT MIT UNS"
    const subhead = isEnglish ? "Be your best self with our favorite exercises and the coolest gear!" : "Erfahre mehr über unsere effektivsten Übungen und besten Produkte!"

  return(
    <Layout>
        <Helmet>
        <title>{`fit.n.risju - ${headline}`}</title>
        <meta
          lang={language.toLowerCase()}
          name="description"
          content={subhead}
        />
      </Helmet>
        <ImageHeader headerImage="/img/fitness-stage.jpg" headline={headline} subhead={subhead} />
        <FitnessRoll />
    </Layout>
  )
  }

  export default FitnessPage