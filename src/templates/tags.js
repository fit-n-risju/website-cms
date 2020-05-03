import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { useLanguage } from '../components/LanguageProvider'

const TagRoute = (props) => {
  
  const { language } = useLanguage();
  const isEnglish = language === 'EN'

    const posts = props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <li className="tag-list" key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="tag-list-link">{isEnglish ? post.node.frontmatter.titleEN : post.node.frontmatter.titleDE}</h2>
        </Link>
      </li>
    ))
    const tag = props.pageContext.tag
    const title = props.data.site.siteMetadata.title
    const totalCount = props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} ${isEnglish ? "post" : "Post"}${
      totalCount === 1 ? '' : 's'
    } ${isEnglish ? "tagged with" : "markiert mit"} “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div  className="taglist"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title">{tagHeader}</h3>
                <ul>{postLinks}</ul>
                <p>
                  <Link to="/tags/">{isEnglish ? "Browse all tags" : "Alle Tags ansehen"}</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }



export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            titleEN
            titleDE
          }
        }
      }
    }
  }
`
