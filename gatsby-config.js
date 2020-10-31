/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                // This type will contain the remote schema Query type
                typeName: "AWSAppSync",
                // This is the field under which it's accessible
                fieldName: "Rose",
                // URL to query from
                url: `${process.env.AWS_APPSYNC_API_URL}`,
                headers: {
                    "x-api-key": `${process.env.AWS_APPSYNC_API_KEY}`
                },
                refetchInterval: 10,
            },
        },
    ],
  }
  