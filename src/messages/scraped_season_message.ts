import { Season, SerialisedSeason } from '../raw';
import { Message, SerialisedMessage } from './message';

/**
 * Message sent when the scraper scrapes a season from the web.
 */
export interface ScrapedSeasonMessage extends Message {
  /** The season scraped. */
  season: Season;
  /** The time the season was scraped. */
  timeScraped: Date;
}

export interface SerialisedScrapedSeasonMessage extends SerialisedMessage {
  season: SerialisedSeason;
  timeScraped: string;
}
