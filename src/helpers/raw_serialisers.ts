import { SerialisedEvent, Event, EventType } from '../raw/event';
import { SerialisedSeason, Season } from '../raw/season';
import { DeserialiseError } from './serialiser_errors';
import { Duty, SerialisedDuty } from '../raw/duty';
import { Match, SerialisedMatch } from '../raw/match';
import { serialiseDate, deserialiseDate } from './serialiser_helpers';
import { EventGuards } from '.';

const validTypes: Array<EventType> = ['duty', 'match', 'other'];

function validateType(type: string): EventType {
  if (!validTypes.includes(type as EventType)) {
    throw new DeserialiseError(
      `Unable to deserialise Event of unknown type <${type}>`,
    );
  }
  return type as EventType;
}

function serialiseEventFields(event: Event): SerialisedEvent {
  return {
    type: event.type,
    time: serialiseDate(event.time),
    timezone: event.timezone,
    duration: event.duration,
    court: event.court,
    venue: event.venue,
  };
}

function deserialiseEventFields(sEvent: SerialisedEvent): Event {
  return {
    type: validateType(sEvent.type),
    time: deserialiseDate(sEvent.time),
    timezone: sEvent.timezone,
    duration: sEvent.duration,
    court: sEvent.court,
    venue: sEvent.venue,
  };
}

export function serialiseEvent(event: Event): SerialisedEvent {
  if(EventGuards.isDuty(event)) {
    return serialiseDuty(event);
  } else if(EventGuards.isMatch(event)) {
    return serialiseMatch(event);
  }
  return serialiseEventFields(event);
}

export function deserialiseEvent(sEvent: SerialisedEvent): Event {
  const type = validateType(sEvent.type);
  switch(type) {
    case 'duty':
      return deserialiseDuty(sEvent as SerialisedDuty)
    case 'match':
      return deserialiseMatch(sEvent as SerialisedMatch);
    case 'other':
      return deserialiseEventFields(sEvent);
  }
}

export function serialiseDuty(duty: Duty): SerialisedDuty {
  return {
    ...(serialiseEventFields(duty)),
    home: duty.home,
    away: duty.away,
    duty: duty.duty,
    round: duty.round,
  };
}

export function deserialiseDuty(sDuty: SerialisedDuty): Duty {
  return {
    ...(deserialiseEventFields(sDuty)),
    home: sDuty.home,
    away: sDuty.away,
    duty: sDuty.duty,
    round: sDuty.round,
  };
}

export function serialiseMatch(match: Match): SerialisedMatch {
  return {
    ...(serialiseEventFields(match)),
    home: match.home,
    away: match.away,
    duty: match.duty,
    round: match.round,
  };
}

export function deserialiseMatch(sMatch: SerialisedMatch): Match {
  return {
    ...(deserialiseEventFields(sMatch)),
    home: sMatch.home,
    away: sMatch.away,
    duty: sMatch.duty,
    round: sMatch.round,
  };
}

export function serialiseSeason(season: Season): SerialisedSeason {
  return {
    competitionName: season.competitionName,
    seasonName: season.seasonName,
    events: season.events.map(serialiseEvent),
  };
}

export function deserialiseSeason(sSeason: SerialisedSeason): Season {
  return {
    competitionName: sSeason.competitionName,
    seasonName: sSeason.seasonName,
    events: sSeason.events.map(deserialiseEvent),
  };
}
