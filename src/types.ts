export type ImportMap = Record<string, string>;

export interface PathAliasesPluginParams {
  /**
   * A dictionary of path aliases to resolve.
   */
  importMap: ImportMap;
  /**
   * The root directory to resolve paths from.
   * Defaults to the current working directory.
   */
  root?: string;
}