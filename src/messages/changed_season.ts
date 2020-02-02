import { Message } from "./message";

export interface SerialisedChangedSeason extends Message {
  seasonName: string;
  teamName: string;
  timeDetected: string;
}

/**
 * Message sent when the data-manager detects a change in a TeamSeason.
 */
export interface ChangedSeason extends Message {
  /** The name of the season where the change occurred. */
  seasonName: string;
  /** The name of the team who has a change in their matches. */
  teamName: string;
  /** The time the change was detected. */
  timeDetected: Date;
}
