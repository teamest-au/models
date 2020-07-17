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

export function serialiseCalendarUpdateMessage(calendarUpdateMessage: CalendarUpdateMessage) {
  return {
    ...calendarUpdateMessage,
    timeUpdated: calendarUpdateMessage.timeUpdated.toISOString(),
  }
}

export function deserialiseCalendarUpdateMessage(
  sCalendarUpdateMessage: SerialisedCalendarUpdateMessage,
): CalendarUpdateMessage {
  return {
    ...sCalendarUpdateMessage,
    timeUpdated: new Date(sCalendarUpdateMessage.timeUpdated),
  };
}

export function serialiseScrapedSeasonMessage(scrapedSeasonMessage: ScrapedSeasonMessage) {
  return {
    ...scrapedSeasonMessage,
    season: serialiseSeason(scrapedSeasonMessage.season),
    timeUpdated: scrapedSeasonMessage.timeScraped.toISOString(),
  }
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

export function serialiseChangedSeasonMessage(changedSeasonMessage: ChangedSeasonMessage) {
  return {
    ...changedSeasonMessage,
    timeDetected: changedSeasonMessage.timeDetected.toISOString(),
  }
}

export function deserialiseChangedSeasonMessage(
  sChangedSeasonMessage: SerialisedChangedSeasonMessage,
): ChangedSeasonMessage {
  return {
    ...sChangedSeasonMessage,
    timeDetected: new Date(sChangedSeasonMessage.timeDetected),
  };
}

export function serialiseChangedUserMessage(changedUserMessage: ChangedUserMessage) {
  return {
    ...changedUserMessage,
    timeChanged: changedUserMessage.timeChanged.toISOString(),
  }
}

export function deserialiseChangedUserMessage(
  sCalendarRefreshMessage: SerialisedChangedUserMessage,
): ChangedUserMessage {
  return {
    ...sCalendarRefreshMessage,
    timeChanged: new Date(sCalendarRefreshMessage.timeChanged),
  };
}
