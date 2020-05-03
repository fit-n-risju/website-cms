import React from 'react'
import PropTypes from 'prop-types'
import { LifestylePostTemplate } from '../../templates/lifestyle-post'

const LifestylePostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <LifestylePostTemplate
      tags={tags && tags.toJS()}
      titleEN={entry.getIn(["data", "titleEN"])}
      titleDE={entry.getIn(["data", "titleDE"])}
      bodyEN={entry.getIn(["data", "bodyEN"])}
      bodyDE={entry.getIn(["data", "bodyDE"])}
    />
  )
}

LifestylePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LifestylePostPreview
