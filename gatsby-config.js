module.exports = {
  siteMetadata: {
    title: `Danobis Sandoval Tattoo`,
    description: `ART & TRIP`,
    author: `@tdelgio`,
    siteUrl: `https://danobissandoval.art`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Danobis Sandoval`,
        short_name: `a&t`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
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
