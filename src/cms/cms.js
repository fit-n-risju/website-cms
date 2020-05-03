import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import FitnessPostPreview from "./preview-templates/FitnessPostPreview"
import LifestylePostPreview from "./preview-templates/LifestylePostPreview"
import RecipePostPreview from "./preview-templates/RecipePostPreview"
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate("fitness", FitnessPostPreview)
CMS.registerPreviewTemplate("lifestyle", LifestylePostPreview)
CMS.registerPreviewTemplate("recipe", RecipePostPreview)
