import React, { Component } from 'react';
import { withApollo, compose } from 'react-apollo';

export default (mapQueryToPromise, mapMutationToProps) => {
	const graphql = (WrappedComponent) => {
		class GraphQL extends Component {
			constructor(props) {
				super(props);
				this.state = {
					result: null
				}
			}

			componentDidMount() {
				let { client, ...ownProps } = this.props;

				mapQueryToPromise(client.query.bind(client), ownProps).then(function(result) {
					this.setState({
						result
					});
				}.bind(this));
			}

			componentWillReceiveProps(newProps) {
				let { client, ...ownProps } = this.props;

				mapQueryToPromise(client.query.bind(client), ownProps).then(function(result) {
					this.setState({
						result
					});
				}.bind(this));
			}

			render() {
				let { children, client, ...ownProps } = this.props;
				let props;

				if(this.state.result) {
					props = {
						...ownProps,
						...mapMutationToProps(client.mutate.bind(client), ownProps),
						...this.state.result
					};
				} else {
					props = {
						...ownProps,
						...mapMutationToProps(client.mutate.bind(client), ownProps)
					}
				}

				return React.createElement(
					WrappedComponent,
					props,
					children
				);
			}
		}

		return GraphQL;
	};

	return compose(
		withApollo,
		graphql
	);
};