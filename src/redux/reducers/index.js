import { combineReducers } from 'redux';

import contacts from './contacts';
// import messages from './messages';

const reducers = combineReducers({
  contacts,
  // messages
})

export default reducers;