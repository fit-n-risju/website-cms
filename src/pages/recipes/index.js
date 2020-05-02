import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import ImageHeader from "../../components/ImageHeader"
import RecipeRoll from "../../components/RecipeRoll"
import { useLanguage } from '../../components/LanguageProvider'

export const RecipePage = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  }) => {

    const { isEnglish, setLanguage } = useLanguage();
  
  return(
    <Layout>
        <ImageHeader headerImage="/img/recipe-stage.jpg" headline={isEnglish ? "RECIPES FOR PERFORMANCE FOOD" : "REZEPTE FÜR PERFORMANCE-FOOD"} subhead={isEnglish ? "Make your own power food: vegan, gluten free, and yummy!" : "Mach dein eigenes Power-Food: vegan, glutenfrei und super lecker!"} />
        <RecipeRoll />
    </Layout>
  )
  }

  export default RecipePage