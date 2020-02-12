import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import Banner from "../components/Banner"

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Erro" />
      <header className={styles.error}>
        <Banner title="oops fim da linha">
          <Link to="/" className="btn-white">
            voltar ao início
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
