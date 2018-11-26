// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag';

export const getContact = gql`query GetContact($id: ID!) {
  getContact(id: $id) {
    id
    name
    email
    phone
  }
}
`;
export const listContacts = gql`query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      phone
    }
    nextToken
  }
}
`;
