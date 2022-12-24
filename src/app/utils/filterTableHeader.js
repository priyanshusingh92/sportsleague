export const scheduleTableHeader = (isTablet, isMobile) => {
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

  if (isTablet) {
    labels.splice(1, 1);
  } else if (isMobile) {
    labels.splice(0, 2);
  }

  return labels;
};

export const leaderBoardTableHeader = (isMobile) => {
  const labels = [
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

  const goalDifference = {
    name: 'GD',
    field: 'goalDifference',
    align: 'center',
  };

  if (isMobile) {
    labels.splice(2, 2, goalDifference);
  }

  return labels;
};
