import { Event, SerialisedEvent } from '../raw';

/**
 * Team Season after diff checked and save by internal-season-api.
 * The base data used to create calendars and for the API to provide match data.
 */
export interface SavedTeamSeason {
  /** The name of the competition. */
  competitionName: string;
  /** The name of the season. */
  seasonName: string;
  /** The name of the team playing in the season. */
  teamName: string;
  /** The events the team will participate in during the seaon. */
  events: Array<Event>;
  /** The time the season was last scraped. */
  lastScraped: Date;
  /** The time the season was last changed. */
  lastChanged: Date;
}

export interface SerialisedSavedTeamSeason {
  competitionName: string;
  seasonName: string;
  teamName: string;
  events: Array<SerialisedEvent>;
  lastScraped: string;
  lastChanged: string;
}
