import { Message } from './message';

/**
 * Message sent when a user has changed their options and so their calendar needs to be refreshed.
 */
export interface ChangedUserMessage extends Message {
  /** The id of the user. */
  userId: string;
  /** The time the refresh was requested. */
  timeChanged: Date;
}

export interface SerialisedChangedUserMessage extends Message {
  userId: string;
  timeChanged: string;
}
