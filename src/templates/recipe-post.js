import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import "./blog.css"
import ImageHeader from "../components/ImageHeader"
import { DiscussionEmbed } from "disqus-react"
import Ingredients from "../components/Ingredients"

import { useLanguage } from '../components/LanguageProvider'

export const RecipePostTemplate = ({
  contentComponent,
  tags,
  titleEN,
  titleDE,
  featuredimage,
  helmet,
  introEN,
  ingredientlistEN,
  instructionsEN,
  introDE,
  ingredientlistDE,
  instructionsDE,
  id,
  isCMSPreview,
}) => {
  const { language } = useLanguage();
  const isEnglish = language === 'EN'

  return (
    <section className="section blog">
      {helmet || ''}
      <div className="blog-header-image">
        <ImageHeader headerImage={featuredimage.childImageSharp.fluid.src} />
      </div>
      <div className="container content">
        <div>
          <div className="column-blog is-10 is-offset-1">
            <Link className="link-to-blog-overview" to="/recipes/">{isEnglish ? "Back to recipe overview" : "Zurück zur Rezept-Übersicht"}</Link>
            <h1 className="title">
              {isEnglish ? titleEN : titleDE}
            </h1>
            <ReactMarkdown source={isEnglish ? introEN : introDE} />
            <h2>{isEnglish ? "Ingredients for 2 people" : "Zutaten für 2 Personen"}</h2>
            <Ingredients ingredients={isEnglish ? ingredientlistEN : ingredientlistDE}/>
            <h2>{isEnglish ? "Instructions" : "Arbeitsschritte"}</h2>
            <ReactMarkdown className="recipe-steps" source={isEnglish ? instructionsEN : instructionsDE} />
            {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        
        <div className="comment-section"></div>
        
        {!isCMSPreview && <DiscussionEmbed
          shortname="fitnrisju"
          config={
            {
              url: typeof window !== 'undefined' ? window.location.href : null,
              identifier: id,
              title: titleEN,
            }
          }
        />}
        
      </div>
    </section>
  )
}

RecipePostTemplate.defaultProps = {
  isCMSPreview: false,
};

RecipePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RecipePostTemplate
        id={post.id}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.titleEN}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        {...post.frontmatter}
      />
    </Layout>
  )
}

RecipePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RecipePost

export const pageQuery = graphql`
  query RecipePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        tags
        templateKey
        titleEN
        titleDE
        date(formatString: "MMMM DD, YYYY")
        descriptionEN
        descriptionDE
        featuredpost
        featuredimage {
          childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                  ...GatsbyImageSharpFluid
              }
          }
        }
        introEN
        introDE
        ingredientlistEN {
          amount
          ingredient
        }
        ingredientlistDE {
          amount
          ingredient
        }
        instructionsEN
        instructionsDE
      }
    }
  }
`