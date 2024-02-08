module.exports = {
  siteMetadata: {
    author: `Rupert Hoffschmidt-McDonnell`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rupert Hoffschmidt-McDonnell`,
        short_name: `Rupert`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kopf2.png`,
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
