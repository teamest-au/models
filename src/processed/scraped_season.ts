import { Season, Target, SerialisedSeason } from '../raw';

/**
 * Season scraped by the scraper instance.
 */
export interface ScrapedSeason {
  /** The season data retrieved from the source. */
  season: Season;
  /** The target information used to perform the scrape. */
  sourceTarget: Target;
}

export interface SerialisedScrapedSeason {
  season: SerialisedSeason;
  sourceTarget: Target;
}
