import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList"

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Início" />
      <Hero img={data.heroBcg.childImageSharp.fluid} />
      <BlogList />
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
