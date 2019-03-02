import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Rowan-James Tran</h1>
    <div style={{ maxWidth: `500px` }}>
        <Project projectTitle="There is No Gun" />
        <Img fluid={props.data.imageThereIsNoGun.childImageSharp.fluid} />
    </div>
    <div style={{ maxWidth: `500px` }}>
        <Project projectTitle="Dead Word Checker" />
        <Img fluid={props.data.imageDeadWordChecker.childImageSharp.fluid} />
    </div>
    <Project projectTitle="Ball Game" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={props.data.imageRowan.childImageSharp.fluid} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query {
        imageRowan: file(relativePath: { eq: "rowan.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        imageThereIsNoGun: file(relativePath: { eq: "there-is-no-gun.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        imageDeadWordChecker: file(relativePath: { eq: "dead-word-checker.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
