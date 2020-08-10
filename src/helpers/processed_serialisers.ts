import { TeamSeason, SerialisedTeamSeason } from '../processed/team_season';
import {
  ScrapedSeason,
  SerialisedScrapedSeason,
} from '../processed/scraped_season';
import {
  deserialiseEvent,
  deserialiseSeason,
  serialiseEvent,
  serialiseSeason,
} from './raw_serialisers';
import { serialiseDate, deserialiseDate } from './serialiser_helpers';

export function serialiseTeamSeason(
  teamSeason: TeamSeason,
): SerialisedTeamSeason {
  return {
    ...teamSeason,
    events: teamSeason.events.map(serialiseEvent),
    lastScraped: serialiseDate(teamSeason.lastScraped),
    lastChanged: serialiseDate(teamSeason.lastChanged),
  };
}

export function deserialiseTeamSeason(
  sTeamSeason: SerialisedTeamSeason,
): TeamSeason {
  return {
    ...sTeamSeason,
    events: sTeamSeason.events.map(deserialiseEvent),
    lastScraped: deserialiseDate(sTeamSeason.lastScraped),
    lastChanged: deserialiseDate(sTeamSeason.lastChanged),
  };
}

export function serialiseScrapedSeason(
  scrapedSeason: ScrapedSeason,
): SerialisedScrapedSeason {
  return {
    ...scrapedSeason,
    season: serialiseSeason(scrapedSeason.season),
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
