import React from "react"
import "./ContentRoll.css"
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { useLanguage } from '../components/LanguageProvider'

const ContentRoll = ({ data }) => {

  const { isEnglish, setLanguage } = useLanguage();

    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="content columns">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column" key={post.id}>
                <div className="featured-thumbnail">
                  {post.frontmatter.featuredimage ? (
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.titleEN}`,
                        }}
                      />
                  ) : null}
                  </div>
                  <div className="preview-content">
                  <p className="post-meta">
                    <Link
                      className="title"
                      to={post.fields.slug}
                    >
                      {isEnglish ? post.frontmatter.titleEN : post.frontmatter.titleDE}
                    </Link>
                    <span className="subtitle">
                      { new Date(post.frontmatter.date).toLocaleString(isEnglish ? 'en-US' : 'de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }
                    </span>
                  </p>
                <p>
                  {isEnglish ? post.frontmatter.descriptionEN : post.frontmatter.descriptionDE}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    {isEnglish ? "Keep Reading →" : "Weiterlesen →"}
                  </Link>
                </p>
                </div>
            </div>
          ))}
      </div>
    )
}

ContentRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ContentRoll