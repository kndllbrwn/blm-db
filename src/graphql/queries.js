/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRose = /* GraphQL */ `
  query GetRose($id: ID!) {
    getRose(id: $id) {
      id
      name
      updatedBy
      imageUrl
      age
      location
      event
      month
      year
      city
      state
      article1
      article2
      article3
    }
  }
`;
export const listRoses = /* GraphQL */ `
  query ListRoses(
    $filter: ModelRoseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        updatedBy
        imageUrl
        age
        location
        event
        month
        year
        city
        state
        article1
        article2
        article3
      }
      nextToken
    }
  }
`;
