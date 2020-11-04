module.exports = {
    plugins: [
      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "blmDB",
          fieldName: "rose",
          url: "https://2apnrm7ymreqfkjznhzs45nxu4.appsync-api.us-east-1.amazonaws.com/graphql",
          headers: {
            "x-api-key": "da2-kk5hi7xxpfcfrfiki4lddfroni"
          },
        },
      },
    ],
  }