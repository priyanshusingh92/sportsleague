import Enzyme, { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { store } from 'app/store';
import LeaderboardWrapper from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('LeaderBoard Page', () => {
  it('Renders LeaderBoard Page without crashing', () => {
    shallow(
      <Provider store={store}>
        <LeaderboardWrapper />
      </Provider>,
    );
  });
});
