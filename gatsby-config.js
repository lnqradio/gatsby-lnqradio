require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: `LNQradio`,
    description: `LNQWeb`,
    author: `@lnqradio`,
    siteUrl: `https://www.lnqradio.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139605681-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/bg`, // wherever background images are stored
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "314380382848388",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://COM.us4.list-manage.com/subscribe/post?u=90c048d44b824ed69cb0b9718&amp;id=19537166fc", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#f56565`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LNQRadio`,
        short_name: `LNQRadio`,
        start_url: `/`,
        background_color: `#281136`,
        theme_color: `#281136`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
