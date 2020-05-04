import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import { Helmet } from "react-helmet"
import ImageHeader from "../../components/ImageHeader"
import Quote from "../../components/Quote"
import Bio from "../../components/Bio"
import QuoteBeige from '../../components/QuoteBeige'
import { useLanguage } from '../../components/LanguageProvider'
import Divider from "../../components/Divider"
import Instastage from "../../components/Instastage"

export const AboutPage = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {

  const { isEnglish, language } = useLanguage();
  const headline = isEnglish ? "GET TO KNOW US" : "LERNT UNS KENNEN"
  const subhead = isEnglish ? "Learn more about why we're passionate about a fit and vegan lifestyle!" : "Hier erzählen wir euch, warum wir uns super mit einem fitten und veganen Lebensstil auskennen."

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
      <ImageHeader headerImage="/img/about-stage.jpg" headline={headline} subhead={subhead} />
      <Quote />
      <Bio />
      <Divider />
      <Instastage />
      <QuoteBeige />
  </Layout>
)
}

export default AboutPage