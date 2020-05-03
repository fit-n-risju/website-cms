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
      // Only allow up to 3 logos
      const logos = brandData.logos.slice(0, 3);
  
      return (
        <div className="content">
            <div className="logo-stage">
                <h2>{isEnglish ? "BRANDS WE'RE WORKING WITH" : "MARKEN-PARTNERSCHAFTEN"}</h2>
                <div className="logo-row" data-num-logos={logos.length.toString()}>
                    {
                        logos.map(logo => (
                            <div className="logo-column" key={logo.brandDE}>
                                <a href={logo.brandLink} target="_blank">
                                    <div className="brand-image">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: logo.image,
                                                alt: `${isEnglish ? logo.brandEN : logo.brandDE} logo`,
                                            }}
                                        />
                                    </div>
                                </a>
                                <p className="logo-description logo-description-mobile">
                                    {isEnglish ? logo.brandEN : logo.brandDE}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="logo-row low-row-descriptions" data-num-logos={logos.length.toString()}>
                    {
                        logos.map(logo => (
                            <div className="logo-column" key={logo.brandDE}>
                                <p className="logo-description">
                                    {isEnglish ? logo.brandEN : logo.brandDE}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      )
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
                    logos{
                        image {
                            childImageSharp {
                                fluid(maxWidth: 120, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        brandDE
                        brandEN
                        brandLink
                    }
                  }
                }
              }
            }
        }
      `}
      render={(data, count) => <Brands data={data} count={count} />}
    />
  )