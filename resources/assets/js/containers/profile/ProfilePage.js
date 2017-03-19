import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';

import graphql from '../../lib/graphql.js';
import ProfilePage from '../../components/profile/ProfilePage.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
	
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	
	};
};

const mapQueryToPromise = (query) => {
	const queryUsers = gql`
    {
		users {
			name
		}
    }
  `;

  return query({
	  query: queryUsers
  }).then(function(result) {
	  return {
		  users: result.data.users
	  };
  });
}

const mapMutationToProps = (mutate) => {
	const mutateUserName = (id, name) => {
		return gql`
		mutation {
			updateUserName(id: ${id}, name: "${name}") {
				id
				name
				username
			}
		}
		`;
	}

	return {
		updateName: (id, name) => {
			return mutate({
				mutation: mutateUserName(id, name)
			}).then(function(result) {

			});
		}
	}
}

export default compose(
	graphql(mapQueryToPromise, mapMutationToProps),
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(ProfilePage);