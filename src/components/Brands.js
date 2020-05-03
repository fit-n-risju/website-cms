import React from 'react'
import "./Brands.css"
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { useLanguage } from '../components/LanguageProvider'

const Brands = ({ data }) => {

    const { isEnglish } = useLanguage();
  
      const { edges: posts } = data.allMarkdownRemark;
      // Allow only one page in the CMS
      const brandData = posts[0].node.frontmatter;

      console.log(brandData)

  
      return (
        <div className="content">
            <div className="detail-row">
                <div className="detail-column">
                <div>
                    <PreviewCompatibleImage
                        imageInfo={{
                        image: brandData.logo1,
                        alt: `${brandData.brand1de} logo`,
                        }}
                    />
                </div>
                <p>
                    {isEnglish ? brandData.brand1en : brandData.brand1de}
                </p>
                </div>
                <div className="detail-column">
                <div>
                    <PreviewCompatibleImage
                        imageInfo={{
                        image: brandData.logo2,
                        alt: `${brandData.brand1de} logo`,
                        }}
                    />
                </div>
                <p>
                    {isEnglish ? brandData.brand2en : brandData.brand2de}
                </p>
                </div>
                <div className="detail-column">
                <div>
                    <PreviewCompatibleImage
                        imageInfo={{
                        image: brandData.logo3,
                        alt: `${brandData.brand2de} logo`,
                        }}
                    />
                </div>
                <p>
                    {isEnglish ? brandData.brand3en : brandData.brand3de}
                </p>
                </div>
        </div>
        </div>
      )
  }

  Brands.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query BrandListQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "brands" } } }
          ) {
            edges {
              node {
                frontmatter {
                  logo1 {
                    childImageSharp {
                        fluid(maxWidth: 120, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                  logo2 {
                    childImageSharp {
                        fluid(maxWidth: 120, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                  logo3 {
                    childImageSharp {
                        fluid(maxWidth: 120, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                  brand1de
                  brand2de
                  brand3de
                  brand1en
                  brand2en
                  brand3en
                  }
                }
              }
            }
        }
      `}
      render={(data, count) => <Brands data={data} count={count} />}
    />
  )