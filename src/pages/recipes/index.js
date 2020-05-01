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
        <ImageHeader headerImage="/img/recipe-stage.jpg" headline="RECIPES FOR PERFORMANCE FOOD" subhead="Make your own power food: vegan, gluten free, and yummy!" />
    </Layout>
  )

  export default RecipePage