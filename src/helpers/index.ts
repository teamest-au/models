import { SerialisedMatch, SerialisedSeason, Match, Season } from '../raw';
import {
  CalendarUpdate,
  SerialisedCalendarUpdate,
  SerialisedScrapedSeason,
  ScrapedSeason,
  SerialisedChangedSeason,
  ChangedSeason,
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
  sCalendarUpdate: SerialisedCalendarUpdate,
): CalendarUpdate {
  return {
    ...sCalendarUpdate,
    timeUpdated: new Date(sCalendarUpdate.timeUpdated),
  };
}

export function deserialiseScrapedSeason(
  sScrapedSeason: SerialisedScrapedSeason,
): ScrapedSeason {
  return {
    ...sScrapedSeason,
    season: deserialiseSeason(sScrapedSeason.season),
    timeScraped: new Date(sScrapedSeason.timeScraped),
  };
}

export function deserialiseChangedSeason(
  sChangedSeason: SerialisedChangedSeason,
): ChangedSeason {
  return {
    ...sChangedSeason,
    timeDetected: new Date(sChangedSeason.timeDetected),
  };
}
