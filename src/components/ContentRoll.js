import React from "react"
import "./ContentRoll.css"
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ContentRoll extends React.Component {
  render() {
    const { data } = this.props
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
                      {post.frontmatter.titleEN}
                    </Link>
                    <span className="subtitle">
                      {post.frontmatter.date}
                    </span>
                  </p>
                <p>
                  {post.frontmatter.descriptionEN}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
                </div>
            </div>
          ))}
      </div>
    )
  }
}

ContentRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ContentRoll