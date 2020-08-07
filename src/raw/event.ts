export type EventType = 'duty' | 'match' | 'other';

export interface Event {
  /** The type of event. */
  type: EventType;
  /** The date and time the match is occurring. */
  time: Date;
  /** The timezone the event occurs in. Defaults to UTC. */
  timezone?: string;
  /** The duration of the event in minutes. */
  duration?: number;
  /** The court the match will take place on (if applicable). */
  court?: string;
  /** The venue the match will take place at. */
  venue?: string;
}

export interface SerialisedEvent {
  type: string;
  time: string;
  timezone?: string;
  duration?: number;
  court?: string;
  venue?: string;
}
