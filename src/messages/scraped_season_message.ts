import { Season, SerialisedSeason } from '../raw';
import { Message } from './message';

/**
 * Message sent when the scraper scrapes a season from the web.
 */
export interface ScrapedSeasonMessage extends Message {
  season: Season;
  timeScraped: Date;
}

export interface SerialisedScrapedSeasonMessage extends Message {
  season: SerialisedSeason;
  timeScraped: string;
}
