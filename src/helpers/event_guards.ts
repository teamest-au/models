import { Event, Match, Duty } from '../raw';

/**
 * Type guard to check if an event is a match.
 * @param event The event to check the type for.
 */
export function isMatch(event: Event): event is Match {
  return event.type === 'match';
}

/**
 * Type guard to check if an event is a duty.
 * @param event The event to check the type for.
 */
export function isDuty(event: Event): event is Duty {
  return event.type === 'duty';
}
