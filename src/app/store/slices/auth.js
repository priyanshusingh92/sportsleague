import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  accessToken: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // INITIALIZE
    getInitialize(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = '';
    },

    // LOGIN
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
    },
  },
});

// Reducer
export default slice.reducer;

const isValidKey = (accessToken) => {
  if (!accessToken || accessToken.length === 0) {
    return false;
  }

  return true;
};

const setSession = (accessToken) => {
  if (accessToken && accessToken.length > 0) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    localStorage.removeItem('accessToken');
  }
};

export function login(accessToken) {
  return async (dispatch) => {
    setSession(accessToken);

    dispatch(slice.actions.loginSuccess({ accessToken }));

    return true;
  };
}

export function getInitialize() {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken && isValidKey(accessToken)) {
        setSession(accessToken);
        dispatch(slice.actions.loginSuccess({ accessToken }));
      } else {
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: false,
            accessToken: '',
          }),
        );
      }
    } catch (error) {
      dispatch(
        slice.actions.getInitialize({
          isAuthenticated: false,
          accessToken: '',
        }),
      );
    }
  };
}
