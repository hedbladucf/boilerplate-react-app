import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123'
  };
  // pass in empty object as default state
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  // should clear out uid when logging out
  const state = authReducer({ uid: 'toBeRemoved' }, action);
  expect(state).toEqual({});
});