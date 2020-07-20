import { Event, Match, Duty } from '../raw';

/**
 * Type utility to get Match if given event is a match.
 * Otherwise return false.
 * @param event The event to attempt to coerce.
 */
export function eventAsMatch(event: Event): Match | false {
  if (event.type === 'match') {
    return event as Match;
  }
  return false;
}

/**
 * Type utility to get Duty if given event is a duty.
 * Otherwise return false.
 * @param event The event to attempt to coerce.
 */
export function eventAsDuty(event: Event): Duty | false {
  if (event.type === 'duty') {
    return event as Duty;
  }
  return false;
}
