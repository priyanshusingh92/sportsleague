import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Table from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Table', () => {
  const labels = [
    { name: 'Date/Time', field: 'matchDate', align: 'right', width: '10' },
    { name: 'Stadim', field: 'stadium', align: 'left', width: '25' },
    {
      name: 'Home Team',
      field: 'homeTeam',
      align: 'right',
      width: '25',
      flag: 'right',
      bold: true,
    },
    { name: '', field: 'result', align: 'center', width: '15', bold: true },
    {
      name: 'Away Team',
      field: 'awayTeam',
      align: 'left',
      width: '25',
      flag: 'left',
      bold: true,
    },
  ];
  const tableData = [
    {
      matchDate: '5.5.2022 12:50',
      stadium: 'Maracanã',
      homeTeam: 'Brazil',
      awayTeam: 'Serbia',
      matchPlayed: true,
      homeTeamScore: 1,
      awayTeamScore: 0,
    },
  ];

  it('Renders Table without crashing', () => {
    shallow(<Table labels={labels} data={tableData} tableStyle={'odd'} />);
  });

  it('Renders image, theader, tboady', () => {
    const wrapper = mount(<Table labels={labels} data={tableData} tableStyle={'odd'} />);

    expect(wrapper.find(`.table-container`)).toHaveLength(1);
    expect(wrapper.find(`.table-header`)).toHaveLength(1);
    expect(wrapper.find(`.table-header th:first-child`).text()).toEqual(labels[0].name);
    expect(wrapper.find(`tbody tr td:first-child`).text()).toEqual(tableData[0].matchDate);
  });
});
