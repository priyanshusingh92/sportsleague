import { getSchedules } from './schedule';
import { store } from '..';

describe('Schedule Slice Test', () => {
  it('Without the token, error should return', async () => {
    await store.dispatch(getSchedules());

    const state = store.getState().schedule;

    expect(state.error).toEqual('Request failed with status code 401');
  });
});
