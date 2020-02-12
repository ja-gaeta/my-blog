import React from "react"
import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Início" />
      {/* <Hero img={data.heroBcg.childImageSharp.fluid} />
      <BlogList /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    heroBcg: file(relativePath: { eq: "siteImage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Home
