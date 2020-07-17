import { TeamSeason, SerialisedTeamSeason } from '../processed/team_season';
import {
  ScrapedSeason,
  SerialisedScrapedSeason,
} from '../processed/scraped_season';
import { deserialiseEvent, deserialiseSeason } from './raw_serialisers';

export function deserialiseTeamSeason(
  sTeamSeason: SerialisedTeamSeason,
): TeamSeason {
  return {
    ...sTeamSeason,
    events: sTeamSeason.events.map(deserialiseEvent),
    timeScraped: new Date(sTeamSeason.timeScraped),
  };
}

export function deserialiseScrapedSeason(
  sScrapedSeason: SerialisedScrapedSeason,
): ScrapedSeason {
  return {
    ...sScrapedSeason,
    season: deserialiseSeason(sScrapedSeason.season),
  };
}
