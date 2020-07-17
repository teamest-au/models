import { Event, SerialisedEvent } from './event';

/**
 * A season, consists of many events that teams participate in.
 */
export interface Season {
  /** Name of the season. */
  name: string;
  /** List of all the events that make up the season. */
  events: Array<Event>;
}

export interface SerialisedSeason {
  /** Name of the season. */
  name: string;
  /** List of all the events that make up the season. */
  events: Array<SerialisedEvent>;
}
