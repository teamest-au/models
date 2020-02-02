import { UserAuthType } from '../web';
import { Message } from './message';

/**
 * Message sent when a user has changed their options and so their calendar needs to be refreshed.
 */
export interface CalendarRefreshMessage extends Message {
  /** The authentication type of the user. */
  userAuthType: UserAuthType;
  /** The id of the user. */
  userId: string;
  /** The time the refresh was requested. */
  timeRequested: Date;
}

export interface SerialisedCalendarRefreshMessage extends Message {
  userAuthType: UserAuthType;
  userId: string;
  timeRequested: string;
}
