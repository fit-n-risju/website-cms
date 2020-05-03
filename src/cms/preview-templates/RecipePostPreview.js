import React from 'react'
import PropTypes from 'prop-types'
import { RecipePostTemplate } from '../../templates/recipe-post'

const RecipePostPreview = ({ entry, getAsset, widgetsFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <RecipePostTemplate
      featuredimage={{
        childImageSharp: {
            fluid: {
                src: getAsset(entry.getIn(['data', 'featuredimage']))
            }
        }
      }}
      tags={tags && tags.toJS()}
      titleEN={entry.getIn(["data", "titleEN"])}
      titleDE={entry.getIn(["data", "titleDE"])}
      introEN={entry.getIn(["data", "introEN"])}
      introDE={entry.getIn(["data", "introDE"])}
      ingredientlistDE={widgetsFor("ingredientlistDE")}
      ingredientlistEN={widgetsFor("ingredientlistEN")}
      instructionsDE={entry.getIn(["data", "instructionsDE"])}
      instructionsEN={entry.getIn(["data", "instructionsEN"])}
      isCMSPreview={true}
    />
  )
}

RecipePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecipePostPreview
