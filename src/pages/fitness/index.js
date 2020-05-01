import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import ImageHeader from "../../components/ImageHeader"

export const RecipePage = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  }) => (
    <Layout>
        <ImageHeader headerImage="/img/fitness-stage.jpg" headline="GET FIT WITH US" subhead="Be your best self with our favorite exercises and the coolest gear!" />
    </Layout>
  )

  export default RecipePage