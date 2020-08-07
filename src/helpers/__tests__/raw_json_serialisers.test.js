const { RawJSONSerialisers } = require('..');

describe('RawJSONSerialisers', () => {
  describe('event', () => {
    it('must correctly serialise and deserialise an event', async () => {
      const event = {
        type: 'match',
        time: new Date('1992-02-05T14:32:44'),
        court: 'Show Court',
        venue: 'Olympic Stadium',
      };

      const packed = RawJSONSerialisers.serialiseEvent(event);

      expect(typeof packed).toBe('string');
      expect(packed).toEqual('{"type":"match","time":"1992-02-05T04:02:44.000Z","court":"Show Court","venue":"Olympic Stadium"}');

      const actual = RawJSONSerialisers.deserialiseEvent(packed);

      expect(actual).toEqual(event);
    });
    it('must correctly serialise and deserialise a match AS an event', async () => {
      const match = {
        type: 'match',
        time: new Date('1992-02-05T14:32:44'),
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
      expect(packed).toEqual('{"type":"match","time":"1992-02-05T04:02:44.000Z","court":"Show Court","venue":"Olympic Stadium","home":{"name":"USA","isExternal":false},"away":{"name":"Japan","isExternal":false},"duty":null,"round":"Round 1"}');

      const actual = RawJSONSerialisers.deserialiseEvent(packed);

      expect(actual).toEqual(match);
    });
  });
  describe('duty', () => {
    it('must correctly serialise and deserialise a duty', async () => {
      const duty = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44'),
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
    });
    it('must correctly serialise and deserialise a duty with optional fields', async () => {
      const duty = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44'),
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
    });
  });
  describe('match', () => {
    it('must correctly serialise and deserialise a match', async () => {
      const match = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44'),
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
    });
    it('must correctly serialise and deserialise a match with optional fields', async () => {
      const match = {
        type: 'duty',
        time: new Date('1992-02-05T14:32:44'),
        court: undefined,
        venue: undefined,
        home: { name: 'USA' },
        away: { name: 'Japan' },
        duty: undefined,
        round: undefined,
      };

      const packed = RawJSONSerialisers.serialiseDuty(match);

      expect(typeof packed).toBe('string');

      const actual = RawJSONSerialisers.deserialiseDuty(packed);

      expect(actual).toEqual(match);
    });
  });
  describe('season', () => {
    it('must correctly serialise and deserialise a season', async () => {
      const season = {
        name: '2020 World League',
        events: [
          {
            type: 'duty',
            time: new Date('1992-02-05T14:32:44'),
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
    });
  });
});
