import React from 'react'

import Layout from '../../components/Layout'
import ImageHeader from "../../components/ImageHeader"
import FitnessRoll from "../../components/FitnessRoll"

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
        <FitnessRoll />
    </Layout>
  )

  export default RecipePage