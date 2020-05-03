import React from 'react'
import PropTypes from 'prop-types'
import { RecipePostTemplate } from '../../templates/recipe-post'

const RecipePostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <RecipePostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      titleEN={entry.getIn(["data", "titleEN"])}
      titleDE={entry.getIn(["data", "titleDE"])}
      featuredimage={entry.getIn(["data", "featuredimage"])}
      introEN={entry.getIn(["data", "introEN"])}
      introDE={entry.getIn(["data", "introDE"])}
      ingredientlistDE={entry.getIn(["data", "ingredientlistDE"])}
      ingredientlistEN={entry.getIn(["data", "ingredientlistEN"])}
      instructionsDE={entry.getIn(["data", "instructionsDE"])}
      instructionsEN={entry.getIn(["data", "instructionsEN"])}
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
