import * as ProcessedSerialisers from './processed_serialisers';

import {
  createJSONSerialise,
  createJSONDeserialise,
} from './serialiser_helpers';

export const serialiseScrapedSeason = createJSONSerialise(
  ProcessedSerialisers.serialiseScrapedSeason,
);
export const deserialiseScrapedSeason = createJSONDeserialise(
  ProcessedSerialisers.deserialiseScrapedSeason,
);
export const serialiseTeamSeason = createJSONSerialise(
  ProcessedSerialisers.serialiseTeamSeason,
);
export const deserialiseTeamSeason = createJSONDeserialise(
  ProcessedSerialisers.deserialiseTeamSeason,
);
