module.exports = {
  siteMetadata: {
    title: `Danobis Sandoval Tattoo`,
    description: `Tattoo - Travel - Art`,
    author: `@gtdelgio`,
    siteUrl: `https://danotattoo.gatsbyjs.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oz1n6doyx04t`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `M0NRiZxmAUriZ6Vs-c0Z-KPIHp1CxP5fw2Iun2zD6Yw`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
