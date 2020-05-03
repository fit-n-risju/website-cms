import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import {Helmet} from "react-helmet"
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

    const { isEnglish, language } = useLanguage();
    const headline = isEnglish ? "RECIPES FOR PERFORMANCE FOOD" : "REZEPTE FÜR PERFORMANCE-FOOD"
    const subhead = isEnglish ? "Make your own power food: vegan, gluten free, and yummy!" : "Mach dein eigenes Power-Food: vegan, glutenfrei und super lecker!"
  
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
        <ImageHeader headerImage="/img/recipe-stage.jpg" headline={headline} subhead={subhead} />
        <RecipeRoll />
    </Layout>
  )
  }

  export default RecipePage