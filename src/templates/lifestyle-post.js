import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import "./blog.css"
import ImageHeader from "../components/ImageHeader"
import { DiscussionEmbed } from "disqus-react"

import { useLanguage } from '../components/LanguageProvider'

export const LifestylePostTemplate = ({
  tags,
  titleEN,
  titleDE,
  featuredimage,
  helmet,
  descriptionEN,
  descriptionDE,
  bodyEN,
  bodyDE,
  id,
  isCMSPreview,
}) => {
  const { language } = useLanguage();
  const isEnglish = language === 'EN'

  return (
    <section className="section blog">
        
        <Helmet>
        <title>{`fit.n.risju - ${isEnglish ? titleEN : titleDE}`}</title>
        <meta
          lang={language.toLowerCase()}
          name="description"
          content={isEnglish ? descriptionEN : descriptionDE}
        />
      </Helmet>

      <div className="blog-header-image">
        <ImageHeader headerImage={featuredimage.childImageSharp.fluid.src} />
      </div>
      <div className="container content">
        <div>
          <div className="column-blog is-10 is-offset-1">
          <Link className="link-to-blog-overview" to="/lifestyle/">{isEnglish ? "Back to lifestyle overview" : "Zurück zur Lifestyle-Übersicht"}</Link>
            <h1 className="title">
              {isEnglish ? titleEN : titleDE}
            </h1>
            <ReactMarkdown source={isEnglish ? bodyEN : bodyDE} />
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
        
        <div className="comment-section">
        </div>
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

LifestylePostTemplate.defaultProps = {
  isCMSPreview: false,
}

LifestylePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const LifestylePost = ({ data }) => {
  const { markdownRemark: post } = data


  return (
    <Layout>
      <LifestylePostTemplate
        id={post.id}
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

LifestylePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default LifestylePost

export const pageQuery = graphql`
  query LifestylePostByID($id: String!) {
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
        bodyEN
        bodyDE
      }
    }
  }
`
