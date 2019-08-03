/** Reducer for logging in and out
 *  passing default state */
export default (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default: 
      return state;
  }
};