import Enzyme, { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { store } from 'app/store';
import Auth from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Auth Page', () => {
  it('Renders Auth Page without crashing', () => {
    shallow(
      <Provider store={store}>
        <Auth />
      </Provider>,
    );
  });

  it('Renders GetToken Button', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Auth />
      </Provider>,
    );

    expect(wrapper.find(`button`).text()).toBe('Get Token');
    expect(wrapper.find(`.app-token-button`)).toHaveLength(1);
  });
});
