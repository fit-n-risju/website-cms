import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import PrivacyPolicyEnglish from "../../components/PrivacyPolicyEnglish"
import PrivacyPolicyGerman from "../../components/PrivacyPolicyGerman"
import { Helmet } from "react-helmet"
import { useLanguage } from '../../components/LanguageProvider'

export const PrivacyPage = () => {

  const { isEnglish, language } = useLanguage();
  
  const headline = isEnglish ? "Privacy Policy" : "Datenschutzerklärung"
  const subhead = isEnglish ? "This is the privacy policy for our website fitnrisju.com." : "Erfahrt mehr darüber, welche Daten wir auf unserer Webseite verabeiten."


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
      {isEnglish ? <PrivacyPolicyEnglish /> : <PrivacyPolicyGerman />}
  </Layout>
)

}

export default PrivacyPage