import React from 'react'
import PropTypes from 'prop-types'
import { FitnessPostTemplate } from '../../templates/fitness-post'

const FitnessPostPreview = ({ entry, getAsset }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <FitnessPostTemplate
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
      bodyEN={entry.getIn(["data", "bodyEN"])}
      bodyDE={entry.getIn(["data", "bodyDE"])}
      isCMSPreview={true}
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
