import { Season, SerialisedSeason } from '../raw';
import { Message } from './message';

/**
 * Message sent when the scraper scrapes a season from the web.
 */
export interface ScrapedSeasonMessage extends Message {
  /** The season scraped. */
  season: Season;
  /** The time the season was scraped. */
  timeScraped: Date;
  /** The timezone of the location the season was scraped from. */
  timezone: string;
  /** The duration of matches (in minutes) at the competition the season was scraped from. */
  matchDuration: number;
}

export interface SerialisedScrapedSeasonMessage extends Message {
  season: SerialisedSeason;
  timeScraped: string;
  timezone: string;
  matchDuration: number;
}
