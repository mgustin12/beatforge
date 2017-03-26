import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

import { QUERY_NAME } from '../queries.js';
import { MUTATE_NAME } from '../mutations.js';
import { updateName } from '../actions.js';
import ProfilePage from '../components/ProfilePage.jsx';

/** Redux Container **/
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onUpdateName: updateName
	}, dispatch);
};

/** GraphQL Container **/
const withQueryName = graphql(QUERY_NAME, {
	props: ({ data }) => ({
		users: data.users
	})
});

const withMutateName = graphql(MUTATE_NAME, {
	props: ({ ownProps, mutate }) => ({
		mutateName(id, name) {
			return mutate({ variables: { id, name } })
				.then(result => {
				ownProps.onUpdateName(result.id, result.name);
			});
		},
	}),
});

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withQueryName,
	withMutateName
)(ProfilePage);
