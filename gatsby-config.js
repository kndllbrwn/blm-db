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
                url: "https://2apnrm7ymreqfkjznhzs45nxu4.appsync-api.us-east-1.amazonaws.com/graphql",
                headers: {
                    "x-api-key": "da2-kk5hi7xxpfcfrfiki4lddfroni"
                },
                refetchInterval: 10,
            },
        },
    ],
  }
  