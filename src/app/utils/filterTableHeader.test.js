import { scheduleTableHeader, leaderBoardTableHeader } from './filterTableHeader';

describe('Filter Table Header Test', () => {
  const scheduleLabels = [
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

  it('With empty, scheduleTableHeader function test', () => {
    expect(scheduleTableHeader()).toEqual(scheduleLabels);
  });

  it('With isMobile true, scheduleTableHeader function test', () => {
    const labelsForMobile = JSON.parse(JSON.stringify(scheduleLabels));
    labelsForMobile.splice(0, 2);

    expect(scheduleTableHeader(false, true)).toEqual(labelsForMobile);
  });

  it('With isTablet true, scheduleTableHeader function test', () => {
    const labelsForTablet = JSON.parse(JSON.stringify(scheduleLabels));
    labelsForTablet.splice(1, 1);

    expect(scheduleTableHeader(true, false)).toEqual(labelsForTablet);
  });

  const leaderBoardLabels = [
    {
      name: 'Team Name',
      field: 'teamName',
      align: 'left',
      width: '50',
      flag: 'left',
      bold: true,
    },
    {
      name: 'MP',
      field: 'matchPlayed',
      align: 'center',
    },
    {
      name: 'GF',
      field: 'goalsFor',
      align: 'center',
    },
    {
      name: 'GA',
      field: 'goalsAgainst',
      align: 'center',
      color: null,
    },
    {
      name: 'Points',
      field: 'points',
      align: 'center',
      bold: true,
      color: 'blue',
    },
  ];

  it('With empty, leaderboardTableHeader function test', () => {
    expect(leaderBoardTableHeader()).toEqual(leaderBoardLabels);
  });

  it('With isMobile true, leaderboardTableHeader function test', () => {
    const goalDifference = {
      name: 'GD',
      field: 'goalDifference',
      align: 'center',
    };

    const labelsForMobile = JSON.parse(JSON.stringify(leaderBoardLabels));
    labelsForMobile.splice(2, 2, goalDifference);

    expect(leaderBoardTableHeader(true)).toEqual(labelsForMobile);
  });

});
