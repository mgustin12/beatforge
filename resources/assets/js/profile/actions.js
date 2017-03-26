export const updateName = (id, name) => {
	return {
		type: 'UPDATE_NAME',
		id,
		name
	}
};