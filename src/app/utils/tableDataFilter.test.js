import { dateFormat } from './dateFormat';
import { scheduleDataFilter, leaderboardDataFilter } from './tableDataFilter';

describe('TableDataFilter Test', () => {
  it('With Empty value, scheduleDataFilter should return []', () => {
    expect(scheduleDataFilter()).toEqual([]);
  });

  it('With mock test', () => {
    const mockData = [
      {
        matchDate: 1651744228685,
        stadium: 'Maracanã',
        homeTeam: 'Brazil',
        awayTeam: 'Serbia',
        matchPlayed: true,
        homeTeamScore: 1,
        awayTeamScore: 0,
      },
    ];
    const mockResult = [
      {
        matchDate: dateFormat(mockData[0].matchDate),
        stadium: mockData[0].stadium,
        homeTeam: mockData[0].homeTeam,
        awayTeam: mockData[0].awayTeam,
        result: `${mockData[0].homeTeamScore} : ${mockData[0].awayTeamScore}`,
      },
    ];

    expect(scheduleDataFilter(mockData)).toEqual(mockResult);
  });

  it('With matched false mock test', () => {
    const mockData = [
      {
        matchDate: 1651744228685,
        stadium: 'Maracanã',
        homeTeam: 'Brazil',
        awayTeam: 'Serbia',
        matchPlayed: false,
        homeTeamScore: 1,
        awayTeamScore: 0,
      },
    ];
    const mockResult = [
      {
        matchDate: dateFormat(mockData[0].matchDate),
        stadium: mockData[0].stadium,
        homeTeam: mockData[0].homeTeam,
        awayTeam: mockData[0].awayTeam,
        result: `- : -`,
      },
    ];

    expect(scheduleDataFilter(mockData)).toEqual(mockResult);
  });

  it('leaderboardDataFilter test', () => {
    const mockInput = {
      Brazil: {
        matchPlayed: 3,
        goalsFor: 8,
        goalsAgainst: 4,
        goalDifference: 4,
        points: 7,
      },
      Serbia: {
        matchPlayed: 3,
        goalsFor: 2,
        goalsAgainst: 4,
        goalDifference: -2,
        points: 3,
      },
      Switzerland: {
        matchPlayed: 3,
        goalsFor: 4,
        goalsAgainst: 7,
        goalDifference: -3,
        points: 3,
      },
      Cameroon: {
        matchPlayed: 3,
        goalsFor: 7,
        goalsAgainst: 6,
        goalDifference: 1,
        points: 5,
      },
    };
  
    const mockResult = [
      {
        teamName: 'Brazil',
        matchPlayed: 3,
        goalsFor: 8,
        goalsAgainst: 4,
        points: 7,
        goalDifference: 4
      },
      {
        teamName: 'Cameroon',
        matchPlayed: 3,
        goalsFor: 7,
        goalsAgainst: 6,
        points: 5,
        goalDifference: 1
      },
      {
        teamName: 'Serbia',
        matchPlayed: 3,
        goalsFor: 2,
        goalsAgainst: 4,
        points: 3,
        goalDifference: -2
      },
      {
        teamName: 'Switzerland',
        matchPlayed: 3,
        goalsFor: 4,
        goalsAgainst: 7,
        points: 3,
        goalDifference: -3
      }
    ]

    expect(leaderboardDataFilter(mockInput)).toEqual(mockResult);
  });
});
