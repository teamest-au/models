import { Event, SerialisedEvent } from '../raw';

/**
 * Team Season created by the data-manager.
 * The base data used to create calendars and for the API to provide match data.
 */
export interface TeamSeason {
  /** The name of the season. */
  seasonName: string;
  /** The name of the team playing in the season. */
  teamName: string;
  /** The events the team will participate in during the seaon. */
  events: Array<Event>;
  /** The time the season was scraped. */
  timeScraped: Date;
}

export interface SerialisedTeamSeason {
  seasonName: string;
  teamName: string;
  events: Array<SerialisedEvent>;
  timeScraped: string;
}
