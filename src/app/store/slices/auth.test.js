import { faker } from '@faker-js/faker';
import { login } from './auth';
import { store } from '..';

describe('auth Slice Test', () => {
  const profile = {
    email: faker.internet.email(),
    password: faker.internet.password(15, false, /^[A-Za-z]*$/, '164'),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
  };

  it('Login should sucess with valid credentials', async () => {
    await store.dispatch(
      login('test_token'),
    );

    const state = store.getState().auth;

    expect(state.isAuthenticated).toBe(true);
    expect(state.accessToken).toBeDefined();
  });
});
