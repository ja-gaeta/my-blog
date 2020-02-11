const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Bookmarked",
    description: "Um blog com minha seleção de artigos preferidos.",
    author: "J.A. Gaeta Mendes",
    twitterUsername: "@JaGaeta",
    image: "/siteImage.jpeg",
    siteUrl: "https://my-blog-project.netlify.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
