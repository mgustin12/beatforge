import gql from 'graphql-tag';

export const MUTATE_NAME = gql`
mutation updateUserName($id: Int!, $name: String!) {
	updateUserName(id: $id, name: $name) {
		id
		name
		username
	}
}
`;