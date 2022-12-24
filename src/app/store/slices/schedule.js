import { createSlice } from '@reduxjs/toolkit';
import LeagueService from 'services/LeagueService';

const leagueInstance = new LeagueService();

const initialState = {
  isLoading: false,
  error: false,
  schedules: [],
  total: 0,
};

const slice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET Schedules Success
    getSchedulesSuccess(state, action) {
      state.isLoading = false;
      state.schedules = action.payload.schedules;
      state.total = action.payload.total;
    },
  },
});

export default slice.reducer;

// --------------------------------------------------

export function getSchedules(access_token) {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.startLoading());

      await leagueInstance.fetchData(access_token);
      const matches = leagueInstance.getMatches();

      dispatch(
        slice.actions.getSchedulesSuccess({
          schedules: matches,
          total: matches.length,
        }),
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
    }
  };
}
