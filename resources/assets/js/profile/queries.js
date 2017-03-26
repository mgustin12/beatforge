import gql from 'graphql-tag';

export const QUERY_NAME = gql`
query {
	users {
		name
	}
}
`;