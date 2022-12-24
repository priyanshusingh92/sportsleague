import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import PageHeading from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('PageHeading component', () => {
  const title = 'Testing Header Section';

  it('Renders PageHeading component without crashing', () => {
    shallow(<PageHeading title={title}/>);
  });

  it('Renders PageHeading component', () => {
    const wrapper = mount(<PageHeading title={title}/>);

    expect(wrapper.find(`h2`).text()).toEqual(title);
  });
});
