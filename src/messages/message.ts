/** Base message type */
export interface Message {
  /** Version number used to detect compatibility. */
  version: string;
}

export interface SerialisedMessage {
  version: string;
}
