import { combineReducers } from 'redux';

import profile from './profile.js';
import home from './home.js';
import beatpad from './beatpad.js';

export default
	combineReducers({
		home,
		profile,
		beatpad
	});