import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ContentRoll from "./ContentRoll"

export default () => (
  <StaticQuery
    query={graphql`
      query RecipeRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "recipe-post" } } }
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
