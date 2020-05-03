import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import Imprint from "../../components/Imprint"
import { Helmet } from "react-helmet"
import { useLanguage } from '../../components/LanguageProvider'

export const ImprintPage = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {

  const { isEnglish, language } = useLanguage();
  
  const headline = isEnglish ? "Imprint" : "Impressum"
  const subhead = isEnglish ? "This is the imprint for our website fitnrisju.com." : "Hier findet sich das Impressum für unsere Webseite fitnrisju.com."


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
      <Imprint />
  </Layout>
)

}

export default ImprintPage