const { RawJSONSerialisers } = require('..');

describe('RawJSONSerialisers', () => {
  describe('event', () => {
    it('must correctly serialise and deserialise an event', async () => {
      const event = {
        type: 'other',
        time: new Date('1992-02-05T14:32:44Z'),
        timezone: 'Australia/Adelaide',
        duration: undefined,
        court: 'Show Court',
        venue: 'Olympic Stadium',
      };

      const packed = RawJSONSerialisers.serialiseEvent(event);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseEvent(packed);

      expect(actual).toEqual(event);
      expect(Object.keys(actual).sort()).toEqual(Object.keys(event).sort());
    });
    it('must correctly serialise and deserialise a match AS an event', async () => {
      const match = {
        type: 'match',
        time: new Date('1992-02-05T14:32:44Z'),
        timezone: 'Australia/Adelaide',
        duration: 120,
        court: 'Show Court',
        venue: 'Olympic Stadium',
        home: {
          name: 'USA',
          isExternal: false,
        },
        away: {
          name: 'Japan',
          isExternal: false,
        },
        duty: undefined,
        round: 'Round 1',
      };

      const packed = RawJSONSerialisers.serialiseEvent(match);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseEvent(packed);

      expect(actual).toEqual(match);
      expect(Object.keys(actual).sort()).toEqual(Object.keys(match).sort());
    });
  });
  describe('duty', () => {
    it('must correctly serialise and deserialise a duty', async () => {
      const duty = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44Z'),
        timezone: 'Australia/Adelaide',
        duration: 60,
        court: 'Show Court',
        venue: 'Olympic Stadium',
        home: { name: 'USA' },
        away: { name: 'Japan' },
        duty: { name: 'Russia' },
        round: 'Round One',
      };

      const packed = RawJSONSerialisers.serialiseDuty(duty);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseDuty(packed);

      expect(actual).toEqual(duty);
      expect(Object.keys(actual).sort()).toEqual(Object.keys(duty).sort());
    });
    it('must correctly serialise and deserialise a duty with optional fields', async () => {
      const duty = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44Z'),
        timezone: undefined,
        duration: undefined,
        court: undefined,
        venue: undefined,
        home: undefined,
        away: undefined,
        duty: { name: 'Russia' },
        round: undefined,
      };

      const packed = RawJSONSerialisers.serialiseDuty(duty);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseDuty(packed);

      expect(actual).toEqual(duty);
      expect(Object.keys(actual).sort()).toEqual(Object.keys(duty).sort());
    });
  });
  describe('match', () => {
    it('must correctly serialise and deserialise a match', async () => {
      const match = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44Z'),
        timezone: 'Australia/Adelaide',
        duration: 90,
        court: 'Show Court',
        venue: 'Olympic Stadium',
        home: { name: 'USA' },
        away: { name: 'Japan' },
        duty: { name: 'Russia' },
        round: 'Round One',
      };

      const packed = RawJSONSerialisers.serialiseMatch(match);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseMatch(packed);

      expect(actual).toEqual(match);
      expect(Object.keys(actual).sort()).toEqual(Object.keys(match).sort());
    });
    it('must correctly serialise and deserialise a match with optional fields', async () => {
      const match = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44Z'),
        court: undefined,
        duration: undefined,
        venue: undefined,
        home: { name: 'USA' },
        away: { name: 'Japan' },
        duty: undefined,
        round: undefined,
        timezone: undefined,
      };

      const packed = RawJSONSerialisers.serialiseDuty(match);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseDuty(packed);

      expect(actual).toEqual(match);
      expect(Object.keys(actual).sort()).toEqual(Object.keys(match).sort());
    });
  });
  describe('season', () => {
    it('must correctly serialise and deserialise a season', async () => {
      const season = {
        competitionName: 'World League',
        seasonName: '2020',
        events: [
          {
            type: 'duty',
            time: new Date('1992-02-05T14:32:44Z'),
            timezone: 'Australia/Adelaide',
            duration: 90,
            court: 'Show Court',
            venue: 'Olympic Stadium',
            home: { name: 'USA' },
            away: { name: 'Japan' },
            duty: { name: 'Russia' },
            round: 'Round One',
          },
        ],
      };

      const packed = RawJSONSerialisers.serialiseSeason(season);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseSeason(packed);

      expect(actual).toEqual(season);
      expect(Object.keys(actual).sort()).toEqual(Object.keys(season).sort());
    });
  });
});
