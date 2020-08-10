import {
  CalendarUpdateMessage,
  SerialisedCalendarUpdateMessage,
} from '../messages/calendar_update_message';
import {
  ScrapedSeasonMessage,
  SerialisedScrapedSeasonMessage,
} from '../messages/scraped_season_message';
import {
  ChangedSeasonMessage,
  SerialisedChangedSeasonMessage,
} from '../messages/changed_season_message';
import {
  ChangedUserMessage,
  SerialisedChangedUserMessage,
} from '../messages/changed_user_message';

import { deserialiseSeason, serialiseSeason } from './raw_serialisers';
import { serialiseDate, deserialiseDate } from './serialiser_helpers';

export function serialiseCalendarUpdateMessage(
  calendarUpdateMessage: CalendarUpdateMessage,
) {
  return {
    ...calendarUpdateMessage,
    timeUpdated: serialiseDate(calendarUpdateMessage.timeUpdated),
  };
}

export function deserialiseCalendarUpdateMessage(
  sCalendarUpdateMessage: SerialisedCalendarUpdateMessage,
): CalendarUpdateMessage {
  return {
    ...sCalendarUpdateMessage,
    timeUpdated: deserialiseDate(sCalendarUpdateMessage.timeUpdated),
  };
}

export function serialiseScrapedSeasonMessage(
  scrapedSeasonMessage: ScrapedSeasonMessage,
) {
  return {
    ...scrapedSeasonMessage,
    season: serialiseSeason(scrapedSeasonMessage.season),
    timeUpdated: serialiseDate(scrapedSeasonMessage.timeScraped),
  };
}

export function deserialiseScrapedSeasonMessage(
  sScrapedSeasonMessage: SerialisedScrapedSeasonMessage,
): ScrapedSeasonMessage {
  return {
    ...sScrapedSeasonMessage,
    season: deserialiseSeason(sScrapedSeasonMessage.season),
    timeScraped: deserialiseDate(sScrapedSeasonMessage.timeScraped),
  };
}

export function serialiseChangedSeasonMessage(
  changedSeasonMessage: ChangedSeasonMessage,
) {
  return {
    ...changedSeasonMessage,
    timeDetected: serialiseDate(changedSeasonMessage.timeDetected),
  };
}

export function deserialiseChangedSeasonMessage(
  sChangedSeasonMessage: SerialisedChangedSeasonMessage,
): ChangedSeasonMessage {
  return {
    ...sChangedSeasonMessage,
    timeDetected: deserialiseDate(sChangedSeasonMessage.timeDetected),
  };
}

export function serialiseChangedUserMessage(
  changedUserMessage: ChangedUserMessage,
) {
  return {
    ...changedUserMessage,
    timeChanged: serialiseDate(changedUserMessage.timeChanged),
  };
}

export function deserialiseChangedUserMessage(
  sCalendarRefreshMessage: SerialisedChangedUserMessage,
): ChangedUserMessage {
  return {
    ...sCalendarRefreshMessage,
    timeChanged: deserialiseDate(sCalendarRefreshMessage.timeChanged),
  };
}
