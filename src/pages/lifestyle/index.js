import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import LifestyleRoll from "../../components/LifestyleRoll"

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
  
    const { isEnglish, setLanguage } = useLanguage();

  return(
    <Layout>
        <ImageHeader headerImage="/img/lifestyle-stage.jpg" headline={isEnglish ? "OUR HEALTHY LIFESTYLE" : "UNSERE LIFESTYLE-TIPPS"} subhead={isEnglish ? "Learn more about why we love our vegan and fit lifestyle." : "Vegan und fitness-orientiert? Kein Problem!"} />
        <LifestyleRoll />
    </Layout>
  )
  }

  export default LifestylePage