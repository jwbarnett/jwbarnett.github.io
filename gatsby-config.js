/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `James Barnett`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-s3-image',
      options: {
        accessKeyId: process.env.PERSONAL_AWS_ACCESS_KEY,
        secretAccessKey: process.env.PERSONAL_AWS_SECRET_KEY,
        region: 'eu-west-1',
        bucketName: 'personal-site-images',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fjalla One`,
          `Cantarell`,
          `Roboto\:100i`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
