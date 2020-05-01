import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import ImageHeader from "../../components/ImageHeader"

export const LifestylePage = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  }) => (
    <Layout>
        <ImageHeader headerImage="/img/lifestyle-stage.jpg" headline="OUR HEALTHY LIFESTYLE" subhead="Learn more about why we love our vegan and fit lifestyle." />
    </Layout>
  )

  export default LifestylePage