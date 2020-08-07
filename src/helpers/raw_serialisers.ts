import { SerialisedEvent, Event, EventType } from '../raw/event';
import { SerialisedSeason, Season } from '../raw/season';
import { DeserialiseError } from './serialiser_errors';
import { Duty, SerialisedDuty } from '../raw/duty';
import { Match, SerialisedMatch } from '../raw/match';

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
    time: event.time.toISOString(),
  };
}

export function deserialiseEvent(sEvent: SerialisedEvent): Event {
  return {
    ...sEvent,
    type: validateType(sEvent.type),
    time: new Date(sEvent.time),
  };
}

export function serialiseDuty(duty: Duty): SerialisedDuty {
  return {
    ...duty,
    time: duty.time.toISOString(),
  };
}

export function deserialiseDuty(sDuty: SerialisedDuty): Duty {
  return {
    ...sDuty,
    type: validateType(sDuty.type),
    time: new Date(sDuty.time),
  };
}

export function serialiseMatch(match: Match): SerialisedMatch {
  return {
    ...match,
    time: match.time.toISOString(),
  };
}

export function deserialiseMatch(sMatch: SerialisedMatch): Match {
  return {
    ...sMatch,
    type: validateType(sMatch.type),
    time: new Date(sMatch.time),
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
