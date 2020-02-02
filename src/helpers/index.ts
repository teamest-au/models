import { SerialisedMatch, SerialisedSeason, Match, Season } from '../raw';
import {
  CalendarUpdateMessage,
  SerialisedCalendarUpdateMessage,
  SerialisedScrapedSeasonMessage,
  ScrapedSeasonMessage,
  SerialisedChangedSeasonMessage,
  ChangedSeasonMessage,
  CalendarRefreshMessage,
  SerialisedCalendarRefreshMessage,
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
  sCalendarUpdateMessage: SerialisedCalendarUpdateMessage,
): CalendarUpdateMessage {
  return {
    ...sCalendarUpdateMessage,
    timeUpdated: new Date(sCalendarUpdateMessage.timeUpdated),
  };
}

export function deserialiseScrapedSeason(
  sScrapedSeasonMessage: SerialisedScrapedSeasonMessage,
): ScrapedSeasonMessage {
  return {
    ...sScrapedSeasonMessage,
    season: deserialiseSeason(sScrapedSeasonMessage.season),
    timeScraped: new Date(sScrapedSeasonMessage.timeScraped),
  };
}

export function deserialiseChangedSeason(
  sChangedSeasonMessage: SerialisedChangedSeasonMessage,
): ChangedSeasonMessage {
  return {
    ...sChangedSeasonMessage,
    timeDetected: new Date(sChangedSeasonMessage.timeDetected),
  };
}

export function deserialiseCalendarRefresh(
  sCalendarRefreshMessage: SerialisedCalendarRefreshMessage,
): CalendarRefreshMessage {
  return {
    ...sCalendarRefreshMessage,
    timeRequested: new Date(sCalendarRefreshMessage.timeRequested),
  };
}
