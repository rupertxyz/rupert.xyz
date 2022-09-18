module.exports = {
  siteMetadata: {
    author: `Rupert Arnold Hoffschmidt-McDonnell`,
    title: `Rupert Hoffschmidt Blog`,
    siteUrl: `https://www.rupert.xyz`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-fontawesome-css',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 350,
              withWebp: true,
              showCaptions: true,
              quality: 100,
              wrapperStyle: 'margin-left: 0!important',
            },
          },
        ],
      },
    },
    'gatsby-plugin-mdx',
  ],
};
