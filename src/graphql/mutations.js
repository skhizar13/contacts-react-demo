// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag';

export const createContact = gql`mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
    id
    name
    email
    phone
  }
}
`;
export const updateContact = gql`mutation UpdateContact($input: UpdateContactInput!) {
  updateContact(input: $input) {
    id
    name
    email
    phone
  }
}
`;
export const deleteContact = gql`mutation DeleteContact($input: DeleteContactInput!) {
  deleteContact(input: $input) {
    id
    name
    email
    phone
  }
}
`;
