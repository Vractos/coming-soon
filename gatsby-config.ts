import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `Atrati | Coming Soon`,
    siteUrl: `https://www.atrati.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": process.env.GOOGLE_ANALYTICS_TRACKING_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "Atrati",
      start_url: `/`,
      lang: `pt-BR`,
      icon: "src/images/icon.png"
    }
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
