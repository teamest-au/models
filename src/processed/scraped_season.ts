import { Season, Target, SerialisedSeason } from '../raw'; 

export interface ScrapedSeason {
  season: Season;
  sourceTarget: Target;
}

export interface SerialisedScrapedSeason {
  season: SerialisedSeason;
  sourceTarget: Target;
}
