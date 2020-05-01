import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'

import ImageHeader from "../../components/ImageHeader"
import Quote from "../../components/Quote"
import Bio from "../../components/Bio"
import QuoteBeige from '../../components/QuoteBeige'

export const AboutPage = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <Layout>
      <ImageHeader headerImage="/img/about-stage.jpg" headline="GET TO KNOW US" subhead="Learn more about why we're passionate about a fit and vegan lifestyle!" />
      <Quote />
      <Bio />
      <QuoteBeige />
  </Layout>
)
export default AboutPage