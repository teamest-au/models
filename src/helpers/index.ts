import { SerialisedMatch, SerialisedSeason, Match, Season } from '../raw';

export function deserialiseMatch(sm: SerialisedMatch): Match {
  return {
    ...sm,
    time: new Date(sm.time),
  };
}

export function deserialiseSeason(ss: SerialisedSeason): Season {
  return {
    ...ss,
    matches: ss.matches.map(deserialiseMatch),
  };
}
