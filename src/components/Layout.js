import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../reset.css"
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import "./layout.css"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>

          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon.ico`}
            sizes="16x16"
          />

        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
  )
}

export default TemplateWrapper
