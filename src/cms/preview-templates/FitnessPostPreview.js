import React from 'react'
import PropTypes from 'prop-types'
import { FitnessPostTemplate } from '../../templates/fitness-post'

const FitnessPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <FitnessPostTemplate
      tags={tags && tags.toJS()}
      titleEN={entry.getIn(["data", "titleEN"])}
      titleDE={entry.getIn(["data", "titleDE"])}
      bodyEN={entry.getIn(["data", "bodyEN"])}
      bodyDE={entry.getIn(["data", "bodyDE"])}
    />
  )
}

FitnessPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FitnessPostPreview
