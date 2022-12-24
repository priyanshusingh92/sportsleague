import { dateFormat } from './dateFormat';

export const scheduleDataFilter = (data) => {
  if (data) {
    return data.reduce((result, current) => {
      result = [
        ...result,
        {
          matchDate: dateFormat(current.matchDate),
          stadium: current.stadium,
          homeTeam: current.homeTeam,
          result: current.matchPlayed ? `${current.homeTeamScore} : ${current.awayTeamScore}` : '- : -',
          awayTeam: current.awayTeam,
        },
      ];
      return result;
    }, []);
  } else return []
};

export const leaderboardDataFilter = (data) => {
  const list = Object.keys(data).map((item) => {
    return {
      teamName: item,
      matchPlayed: data[item].matchPlayed,
      goalsFor: data[item].goalsFor,
      goalsAgainst: data[item].goalsAgainst,
      points: data[item].points,
      goalDifference: data[item].goalDifference,
    };
  });

  list.sort((a, b) => {
    if (a.points === b.points) {
      if (a.matchPlayed === b.matchPlayed) {
        if (a.goalDifference === b.goalDifference) {
          if (b.goalsFor === a.goalsFor) return b.teamName - a.teamName;
          return b.goalsFor - a.goalsFor;
        }
        return b.goalDifference - a.goalDifference;
      }
      return b.matchPlayed - a.matchPlayed;
    }

    return b.points - a.points;
  });

  return list;
};
