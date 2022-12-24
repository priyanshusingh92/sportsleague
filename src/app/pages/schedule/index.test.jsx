import Enzyme, { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { store } from 'app/store';
import ScheduleWrapper from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Schedule Page', () => {
  it('Renders Schedule Page without crashing', () => {
    shallow(
      <Provider store={store}>
        <ScheduleWrapper />
      </Provider>,
    );
  });
});
