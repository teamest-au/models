import { Match, SerialisedMatch } from './match';

/**
 * A season of volleyball, consists of many matches.
 */
export interface Season {
  /** Name of the season */
  name: string;
  /** List of all the matches that make up the season */
  matches: Array<Match>;
}

export interface SerialisedSeason {
  /** Name of the season */
  name: string;
  /** List of all the matches that make up the season */
  matches: Array<SerialisedMatch>;
}
