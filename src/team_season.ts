import { Match, SerialisedMatch } from './match';

export class TeamSeason {
  seasonName: string;
  teamName: string;
  matches: Array<Match>;

  constructor(seasonName: string, teamName: string, matches: Array<Match>) {
    this.seasonName = seasonName;
    this.teamName = teamName;
    this.matches = matches;
  }
}

export class SerialisedTeamSeason {
  seasonName: string;
  teamName: string;
  matches: Array<SerialisedMatch>;

  constructor(
    seasonName: string,
    teamName: string,
    matches: Array<SerialisedMatch>,
  ) {
    this.seasonName = seasonName;
    this.teamName = teamName;
    this.matches = matches;
  }
}
