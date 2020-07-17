/**
 * A sports team.
 */
export interface Team {
  /** The name of the team. */
  name: string;
  /** Whether the team is external to this grade/competition. */
  isExternal: boolean;
}

export interface SerialisedTeam {
  /** The name of the team. */
  name: string;
  /** Whether the team is external to this grade/competition. */
  isExternal: boolean;
}
