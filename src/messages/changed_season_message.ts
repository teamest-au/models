import { Message, SerialisedMessage } from './message';

/**
 * Message sent when the data-manager detects a change in a TeamSeason.
 */
export interface ChangedSeasonMessage extends Message {
  /** The name of the competition where the change occurred. */
  competitionName: string;
  /** The name of the season where the change occurred. */
  seasonName: string;
  /** The name of the team who has a change in their matches. */
  teamName: string;
  /** The time the change was detected. */
  timeDetected: Date;
}

export interface SerialisedChangedSeasonMessage extends SerialisedMessage {
  competitionName: string;
  seasonName: string;
  teamName: string;
  timeDetected: string;
}
