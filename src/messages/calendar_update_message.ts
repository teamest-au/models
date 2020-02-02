import { UserAuthType } from '../web';
import { Message } from './message';

export interface SerialisedCalendarUpdateMessage extends Message {
  userAuthType: UserAuthType;
  userId: string;
  timeUpdated: string;
}

/**
 * Message sent when the calendar generator updates a user's calendar.
 */
export interface CalendarUpdateMessage extends Message {
  /** The authentication type of the user. */
  userAuthType: UserAuthType;
  /** The id of the user. */
  userId: string;
  /** The time the user's calendar was updated. */
  timeUpdated: Date;
}
