export interface IScrapeJobs {
    url: string;
    outerSelector: string; // this serves for both the description and the link
    innerSelector: string; // this is just for the description - NEED ANOTHER PROPERTY FOR THE LINK (and then to rename this one)
}

export interface IScrapedJob {
    link: string;
    html: string;
}

export interface IScrapedJobs {
    html: string;
    jobs: IScrapedJob[];
}
