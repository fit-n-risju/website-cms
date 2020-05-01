import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import Imprint from "../../components/Imprint"

export const ImprintPage = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <Layout>
      <Imprint />
  </Layout>
)
export default ImprintPage