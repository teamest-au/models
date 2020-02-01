import { Match, SerialisedMatch } from '../raw/match';

export interface TeamSeason {
  seasonName: string;
  teamName: string;
  matches: Array<Match>;
}

export interface SerialisedTeamSeason {
  seasonName: string;
  teamName: string;
  matches: Array<SerialisedMatch>;
}
