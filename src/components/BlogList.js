import React from "react"
import Title from "../components/Title"
import styles from "../css/blog.module.css"

const BlogList = () => {
  return (
    <section className={styles.blog}>
      <Title title="artigos" subtitle="marcados" />
      <div className={styles.center}>
        <p>aqui irão os posts</p>
      </div>
    </section>
  )
}

export default BlogList
