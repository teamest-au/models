import { Team } from './team';

/**
 * Data about a particular volleyball match.
 */
export class Match {
    /** The home team playing. */
    home: Team;
    /** The away team playing. */
    away: Team;
    /** The duty team (if applicable) */
    duty: Team;
    /** The date and time the match is occurring. */
    time: Date;
    /** The court the match will take place on (if applicable) */
    court: string;
    /** The venue the match will take place at */
    venue: string;
    /** Optional name for the round */
    round: string;
}