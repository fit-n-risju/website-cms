import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import LifestyleRoll from "../../components/LifestyleRoll"
import { Helmet } from "react-helmet"
import Layout from '../../components/Layout'
import ImageHeader from "../../components/ImageHeader"
import { useLanguage } from '../../components/LanguageProvider'

export const LifestylePage = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  }) => {
  
    const { isEnglish, language } = useLanguage();
    const headline = isEnglish ? "OUR HEALTHY LIFESTYLE" : "UNSERE LIFESTYLE-TIPPS"
    const subhead = isEnglish ? "Learn more about why we love our vegan and fit lifestyle." : "Vegan und fitness-orientiert? Kein Problem!"

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
        <ImageHeader headerImage="/img/lifestyle-stage.jpg" headline={headline} subhead={subhead} />
        <LifestyleRoll />
    </Layout>
  )
  }

  export default LifestylePage