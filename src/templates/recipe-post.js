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

import { useLanguage } from '../components/LanguageProvider'

export const RecipePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  titleEN,
  titleDE,
  featuredimage,
  helmet,
  bodyEN,
  bodyDE,
  date,
  id,
}) => {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === 'EN'
  const PostContent = contentComponent || Content

  return (
    <section className="section blog">
      {helmet || ''}
      <div className="blog-header-image">
        <ImageHeader headerImage={featuredimage.childImageSharp.fluid.src} />
      </div>
      <div className="container content">
        <div>
          <div className="column-blog is-10 is-offset-1">
            <h1 className="title">
              {isEnglish ? titleEN : titleDE}
            </h1>
            <ReactMarkdown source={isEnglish ? bodyEN : bodyDE} />
            <PostContent content={content} />
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

        <a onClick={(e) => {
          e.preventDefault();
          setLanguage(isEnglish ? 'DE' : 'EN')
        }}>
          { isEnglish ? 'Show in Deutsch' : 'Show in English' }
        </a>
        
        <div className="comment-section">
        </div>
        <DiscussionEmbed
          shortname="fitnrisju"
          config={
            {
              url: typeof window !== 'undefined' ? window.location.href : null,
              identifier: id,
              title: titleEN,
            }
          }
        />
        
      </div>
    </section>
  )
}

RecipePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data

  console.log('markdownRemark', data.markdownRemark)

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