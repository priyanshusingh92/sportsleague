/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW AND
 *       PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 */

import axios from 'axios';
class LeagueService {
  constructor() {
    this.fetchUrl = 'http://localhost:3001/api/v1';
    this.matches = [];
    this.leaderboardList = [];
    this.calPoints = this.calPoints.bind(this);
    this.addItems = this.addItems.bind(this);
  }
  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array} matches List of matches.
   */
  setMatches(matches) {
    this.matches = matches;
  }

  /**
   * Returns the full list of matches.
   *
   * @returns {Array} List of matches.
   */
  getMatches() {
    return this.matches;
  }

  /**
   * Returns the leaderboard in a form of a list of JSON objecs.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array} List of teams representing the leaderboard.
   */
  getLeaderboard(matches) {
    const list = matches.reduce((result, current) => {
      if (current.matchPlayed) {
        this.addItems(result, current.homeTeam, current.homeTeamScore, current.awayTeamScore);
        this.addItems(result, current.awayTeam, current.awayTeamScore, current.homeTeamScore);
      }
      return result;
    }, {});

    return list;
  }

  calPoints(firstScore, secondScore) {
    if (firstScore > secondScore) return 3;
    else if ((firstScore = secondScore)) return 1;
    else return 0;
  }

  addItems(result, team, firstScore, secondScore) {
    if (typeof result[team] === 'undefined') {
      result[team] = {
        matchPlayed: 1,
        goalsFor: firstScore,
        goalsAgainst: secondScore,
        goalDifference: firstScore - secondScore,
        points: this.calPoints(firstScore, secondScore),
      };
    } else {
      result[team].matchPlayed++;
      result[team].goalsFor += firstScore;
      result[team].goalsAgainst += secondScore;
      result[team].goalDifference += firstScore - secondScore;
      result[team].points += this.calPoints(firstScore, secondScore);
    }
  }
  /**
   * Asynchronic function to fetch the data from the server.
   */
  async fetchData(access_token) {
    const result = await axios.get(`${this.fetchUrl}/getAllMatches`, {
      headers: {
        Authorization: access_token,
      },
    });
    if (result.data.success) {
      this.setMatches(result.data.matches);
    }
  }
}

export default LeagueService;
