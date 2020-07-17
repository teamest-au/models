import { Event, SerialisedEvent } from './event';
import { Team } from './team';

/**
 * Data about a particular match.
 */
export interface Match extends Event {
  /** The home team playing. */
  home: Team;
  /** The away team playing. */
  away: Team;
  /** The duty team (if applicable). */
  duty?: Team;
  /** Name for the round (if available). */
  round?: string;
}

export interface SerialisedMatch extends SerialisedEvent {
  /** The home team playing. */
  home: Team;
  /** The away team playing. */
  away: Team;
  /** The duty team (if applicable). */
  duty?: Team;
  /** Name for the round (if available). */
  round?: string;
}
