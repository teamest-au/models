import { Message, SerialisedMessage } from './message';

/**
 * Message sent when the calendar generator updates a user's calendar.
 */
export interface CalendarUpdateMessage extends Message {
  /** The id of the user. */
  userId: string;
  /** The time the user's calendar was updated. */
  timeUpdated: Date;
}

export interface SerialisedCalendarUpdateMessage extends SerialisedMessage {
  userId: string;
  timeUpdated: string;
}
