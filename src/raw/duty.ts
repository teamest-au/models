import { Event, SerialisedEvent } from './event';
import { Team } from './team';

/**
 * Data about a particular duty.
 */
export interface Duty extends Event {
  /** The home team playing (if available). */
  home?: Team;
  /** The away team playing (if available). */
  away?: Team;
  /** The duty team. */
  duty: Team;
  /** Name for the round (if available). */
  round?: string;
}

export interface SerialisedDuty extends SerialisedEvent {
  /** The home team playing (if available). */
  home?: Team;
  /** The away team playing (if available). */
  away?: Team;
  /** The duty team. */
  duty: Team;
  /** Name for the round (if available). */
  round?: string;
}
