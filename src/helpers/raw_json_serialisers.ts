import * as RawSerialisers from './raw_serialisers';

import {
  createJSONSerialise,
  createJSONDeserialise,
} from './serialiser_helpers';

export const serialiseEvent = createJSONSerialise(
  RawSerialisers.serialiseEvent,
);
export const deserialiseEvent = createJSONDeserialise(
  RawSerialisers.deserialiseEvent,
);
export const serialiseDuty = createJSONSerialise(RawSerialisers.serialiseDuty);
export const deserialiseDuty = createJSONDeserialise(
  RawSerialisers.deserialiseDuty,
);
export const serialiseMatch = createJSONSerialise(
  RawSerialisers.serialiseMatch,
);
export const deserialiseMatch = createJSONDeserialise(
  RawSerialisers.deserialiseMatch,
);
export const serialiseSeason = createJSONSerialise(
  RawSerialisers.serialiseSeason,
);
export const deserialiseSeason = createJSONDeserialise(
  RawSerialisers.deserialiseSeason,
);
