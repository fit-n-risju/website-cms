import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'

import ImageHeader from "../../components/ImageHeader"
import Quote from "../../components/Quote"
import Bio from "../../components/Bio"
import QuoteBeige from '../../components/QuoteBeige'
import { useLanguage } from '../../components/LanguageProvider'

export const AboutPage = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {

  const { isEnglish } = useLanguage();

return(
  <Layout>
      <ImageHeader headerImage="/img/about-stage.jpg" headline={isEnglish ? "GET TO KNOW US" : "LERNT UNS KENNEN"} subhead={isEnglish ? "Learn more about why we're passionate about a fit and vegan lifestyle!" : "Hier erzählen wir euch, warum wir uns super mit einem fitten und veganen Lebensstil auskennen."} />
      <Quote />
      <Bio />
      <QuoteBeige />
  </Layout>
)
}

export default AboutPage