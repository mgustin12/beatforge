import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Beatlist from '../components/BeatList.jsx';

/** Redux Container **/
const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
	// return bindActionCreators({
	// }, dispatch);
};

/** GraphQL Container **/
// const withQueryName = graphql(QUERY_NAME, {
// 	props: ({ data }) => ({
// 		users: data.users
// 	})
// });

// const withMutateName = graphql(MUTATE_NAME, {
// 	props: ({ ownProps, mutate }) => ({
// 		mutateName(id, name) {
// 			return mutate({ variables: { id, name } })
// 				.then(result => {
// 				ownProps.onUpdateName(result.id, result.name);
// 			});
// 		},
// 	}),
// });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Beatlist);
