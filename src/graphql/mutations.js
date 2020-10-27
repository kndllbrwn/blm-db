/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRose = /* GraphQL */ `
  mutation CreateRose(
    $input: CreateRoseInput!
    $condition: ModelRoseConditionInput
  ) {
    createRose(input: $input, condition: $condition) {
      id
      name
      updatedBy
      updateTime
      imageUrl
      age
      location
      event
      month
      year
      city
      state
      source1
      source2
      source3
    }
  }
`;
export const updateRose = /* GraphQL */ `
  mutation UpdateRose(
    $input: UpdateRoseInput!
    $condition: ModelRoseConditionInput
  ) {
    updateRose(input: $input, condition: $condition) {
      id
      name
      updatedBy
      updateTime
      imageUrl
      age
      location
      event
      month
      year
      city
      state
      source1
      source2
      source3
    }
  }
`;
export const deleteRose = /* GraphQL */ `
  mutation DeleteRose(
    $input: DeleteRoseInput!
    $condition: ModelRoseConditionInput
  ) {
    deleteRose(input: $input, condition: $condition) {
      id
      name
      updatedBy
      updateTime
      imageUrl
      age
      location
      event
      month
      year
      city
      state
      source1
      source2
      source3
    }
  }
`;
