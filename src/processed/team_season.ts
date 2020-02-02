import { Match, SerialisedMatch } from '../raw/match';

/**
 * Team Season created by the data-manager.
 * The base data used to create calendars and for the API to provide match data.
 */
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
