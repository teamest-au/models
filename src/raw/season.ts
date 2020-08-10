import { Event, SerialisedEvent } from './event';

/**
 * A season, consists of many events that teams participate in.
 */
export interface Season {
  /** Name of the competition. */
  competitionName: string;
  /** Name of the season. */
  seasonName: string;
  /** List of all the events that make up the season. */
  events: Array<Event>;
}

export interface SerialisedSeason {
  competitionName: string;
  seasonName: string;
  events: Array<SerialisedEvent>;
}
