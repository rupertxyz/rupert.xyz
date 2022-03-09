module.exports = {
  siteMetadata: {
    author: `Rupert Hoffschmidt`,
    title: `Rupert Hoffschmidt Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}