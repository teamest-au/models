export type EventType = 'duty' | 'match' | 'other';

export interface Event {
  /** The type of event. */
  type: EventType;
  /** The date and time the match is occurring. */
  time: Date;
  /** The court the match will take place on (if applicable). */
  court?: string;
  /** The venue the match will take place at. */
  venue?: string;
}

export interface SerialisedEvent {
  /** The type of event. */
  type: string;
  /** The date and time the match is occurring. */
  time: string;
  /** The court the match will take place on (if applicable). */
  court?: string;
  /** The venue the match will take place at. */
  venue?: string;
}
