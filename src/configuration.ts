/**
 * Configuration defining which data should be scraped.
 */
export class Configuration {
  constructor(targets: Target[]) {
    this.targets = targets;
  }
  /**
   * List of targets to be scraped.
   */
  targets: Array<Target>;
}

/**
 * A scrape target.
 */
export class Target {
  constructor(
    url: string,
    scraperName: string,
    timezone: string,
    options?: any,
  ) {
    this.url = url;
    this.scraperName = scraperName;
    this.timezone = timezone;
    this.options = options;
  }
  /**
   * The url to scrape the data from
   */
  url: string;
  /**
   * The scraper type to use to retrieve the data from the html.
   */
  scraperName: string;
  /**
   * The timezone that the data being scraped is expected to be in.
   */
  timezone: string;
  /**
   * Custom options to provide to scraper
   */
  options?: any;
}
