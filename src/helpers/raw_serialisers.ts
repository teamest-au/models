import { SerialisedEvent, Event, EventType } from '../raw/event';
import { SerialisedSeason, Season } from '../raw/season';
import { DeserialiseError } from './serialiser_errors';
import { Duty, SerialisedDuty } from '../raw/duty';
import { Match, SerialisedMatch } from '../raw/match';
import { serialiseDate, deserialiseDate } from './serialiser_helpers';

const validTypes: Array<EventType> = ['duty', 'match', 'other'];

function validateType(type: string): EventType {
  if (!validTypes.includes(type as EventType)) {
    throw new DeserialiseError(
      `Unable to deserialise Event of unknown type <${type}>`,
    );
  }
  return type as EventType;
}

export function serialiseEvent(event: Event): SerialisedEvent {
  return {
    ...event,
    time: serialiseDate(event.time),
  };
}

export function deserialiseEvent(sEvent: SerialisedEvent): Event {
  return {
    ...sEvent,
    type: validateType(sEvent.type),
    time: deserialiseDate(sEvent.time),
  };
}

export function serialiseDuty(duty: Duty): SerialisedDuty {
  return {
    ...duty,
    time: serialiseDate(duty.time),
  };
}

export function deserialiseDuty(sDuty: SerialisedDuty): Duty {
  return {
    ...sDuty,
    type: validateType(sDuty.type),
    time: deserialiseDate(sDuty.time),
  };
}

export function serialiseMatch(match: Match): SerialisedMatch {
  return {
    ...match,
    time: serialiseDate(match.time),
  };
}

export function deserialiseMatch(sMatch: SerialisedMatch): Match {
  return {
    ...sMatch,
    type: validateType(sMatch.type),
    time: deserialiseDate(sMatch.time),
  };
}

export function serialiseSeason(season: Season): SerialisedSeason {
  return {
    ...season,
    events: season.events.map(serialiseEvent),
  };
}

export function deserialiseSeason(sSeason: SerialisedSeason): Season {
  return {
    ...sSeason,
    events: sSeason.events.map(deserialiseEvent),
  };
}
