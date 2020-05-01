import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ContentRoll from "./ContentRoll"

export default () => (
  <StaticQuery
    query={graphql`
      query LifestyleRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "lifestyle-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                titleEN
                titleDE
                templateKey
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 120, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                date(formatString: "MMMM DD, YYYY")
                descriptionEN
                descriptionDE
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ContentRoll data={data} count={count} />}
  />
)
