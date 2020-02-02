import { SerialisedMatch, SerialisedSeason, Match, Season } from '../raw';
import {
  CalendarUpdateMessage,
  SerialisedCalendarUpdateMessage,
  SerialisedScrapedSeasonMessage,
  ScrapedSeasonMessage,
  SerialisedChangedSeasonMessage,
  ChangedSeasonMessage,
} from '../messages';

export function deserialiseMatch(sMatch: SerialisedMatch): Match {
  return {
    ...sMatch,
    time: new Date(sMatch.time),
  };
}

export function deserialiseSeason(sSeason: SerialisedSeason): Season {
  return {
    ...sSeason,
    matches: sSeason.matches.map(deserialiseMatch),
  };
}

export function deserialiseCalendarUpdate(
  sCalendarUpdate: SerialisedCalendarUpdateMessage,
): CalendarUpdateMessage {
  return {
    ...sCalendarUpdate,
    timeUpdated: new Date(sCalendarUpdate.timeUpdated),
  };
}

export function deserialiseScrapedSeason(
  sScrapedSeason: SerialisedScrapedSeasonMessage,
): ScrapedSeasonMessage {
  return {
    ...sScrapedSeason,
    season: deserialiseSeason(sScrapedSeason.season),
    timeScraped: new Date(sScrapedSeason.timeScraped),
  };
}

export function deserialiseChangedSeason(
  sChangedSeason: SerialisedChangedSeasonMessage,
): ChangedSeasonMessage {
  return {
    ...sChangedSeason,
    timeDetected: new Date(sChangedSeason.timeDetected),
  };
}
