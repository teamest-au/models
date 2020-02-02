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
import {
  SerialisedScrapedSeason,
  ScrapedSeason,
  SerialisedTeamSeason,
  TeamSeason,
} from '../processed';

/** Raw */
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

/** Processed */
export function deserialiseScrapedSeason(
  sScrapedSeason: SerialisedScrapedSeason,
): ScrapedSeason {
  return {
    ...sScrapedSeason,
    season: deserialiseSeason(sScrapedSeason.season),
  };
}

export function deserialiseTeamSeason(
  sTeamSeason: SerialisedTeamSeason,
): TeamSeason {
  return {
    ...sTeamSeason,
    matches: sTeamSeason.matches.map(deserialiseMatch),
    timeScraped: new Date(sTeamSeason.timeScraped),
  };
}

/** Messages */
export function deserialiseCalendarUpdateMessage(
  sCalendarUpdateMessage: SerialisedCalendarUpdateMessage,
): CalendarUpdateMessage {
  return {
    ...sCalendarUpdateMessage,
    timeUpdated: new Date(sCalendarUpdateMessage.timeUpdated),
  };
}

export function deserialiseScrapedSeasonMessage(
  sScrapedSeasonMessage: SerialisedScrapedSeasonMessage,
): ScrapedSeasonMessage {
  return {
    ...sScrapedSeasonMessage,
    season: deserialiseSeason(sScrapedSeasonMessage.season),
    timeScraped: new Date(sScrapedSeasonMessage.timeScraped),
  };
}

export function deserialiseChangedSeasonMessage(
  sChangedSeasonMessage: SerialisedChangedSeasonMessage,
): ChangedSeasonMessage {
  return {
    ...sChangedSeasonMessage,
    timeDetected: new Date(sChangedSeasonMessage.timeDetected),
  };
}

export function deserialiseCalendarRefreshMessage(
  sCalendarRefreshMessage: SerialisedCalendarRefreshMessage,
): CalendarRefreshMessage {
  return {
    ...sCalendarRefreshMessage,
    timeRequested: new Date(sCalendarRefreshMessage.timeRequested),
  };
}
