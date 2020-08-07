import * as MessageSerialisers from './message_serialisers';

import {
  createJSONSerialise,
  createJSONDeserialise,
} from './serialiser_helpers';

export const serialiseCalendarUpdateMessage = createJSONSerialise(
  MessageSerialisers.serialiseCalendarUpdateMessage,
);
export const deserialiseCalendarUpdateMessage = createJSONDeserialise(
  MessageSerialisers.deserialiseCalendarUpdateMessage,
);
export const serialiseChangedSeasonMessage = createJSONSerialise(
  MessageSerialisers.serialiseChangedSeasonMessage,
);
export const deserialiseChangedSeasonMessage = createJSONDeserialise(
  MessageSerialisers.deserialiseChangedSeasonMessage,
);
export const serialiseChangedUserMessage = createJSONSerialise(
  MessageSerialisers.serialiseChangedUserMessage,
);
export const deserialiseChangedUserMessage = createJSONDeserialise(
  MessageSerialisers.deserialiseChangedUserMessage,
);
export const serialiseScrapedSeasonMessage = createJSONSerialise(
  MessageSerialisers.serialiseScrapedSeasonMessage,
);
export const deserialiseScrapedSeasonMessage = createJSONDeserialise(
  MessageSerialisers.deserialiseScrapedSeasonMessage,
);
