import { UserAuthType } from '../web';
import { Message } from './message';

/**
 * Message sent when a user has changed their options and so their calendar needs to be refreshed.
 */
export default interface CalendarRefresh extends Message {
  /** The authentication type of the user. */
  userAuthType: UserAuthType;
  /** The id of the user. */
  userId: string;
}
