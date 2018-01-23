import { Match } from './match';
/**
 * A season of volleyball, consists of many matches.
 */
export declare class Season {
    /** Name of the season */
    name: string;
    /** List of all the matches that make up the season */
    matches: Array<Match>;
}
