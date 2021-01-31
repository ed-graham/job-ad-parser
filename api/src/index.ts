import { scrapeJobs, IScrapeJobs } from '@ed-graham/scrape-jobs';

console.log('Making the request to CV Library ...');
// https://www.britishjobs.co.uk/solution-architect-technical-lead-developer-jobs-in-cb25-9ft?distance=100&industry=13&salarymin=80000&us=1 - same as cv-library

const cvLibraryJobs: IScrapeJobs = {
  url: 'https://www.cv-library.co.uk/solution-architect-technical-lead-developer-jobs-in-cb25-9ft?distance=100&industry=13&salarymin=80000&us=1', //https://www.cv-library.co.uk/solution-architect-technical-lead-developer-jobs-in-cb25-9ft?distance=100&industry=13&salary_annual=8&salary_annual=7&us=1'
  outerSelector: 'li.results__item',
  innerSelector: 'p.job__description'
}
scrapeJobs(cvLibraryJobs).then((output: string) => console.log(output));

console.log('Making the request to Jobsite ...');
// https://www.cwjobs.co.uk/jobs/solution-architect/in-london?salary=80000&salarytypeid=1&postedwithin=14&radius=30&page=1 - same as jobsite
const jobSiteJobs: IScrapeJobs = {
  url: 'https://www.jobsite.co.uk/jobs/solutions-architect/in-london?salary=80000&salarytypeid=1&postedwithin=14&radius=30&page=1',
  outerSelector: 'div.job',
  innerSelector: 'p.job-intro'
}
scrapeJobs(jobSiteJobs).then((output: string) => console.log(output));

console.log('Making the request to Reed ...');
const reedJobs: IScrapeJobs = {
  url: 'https://www.reed.co.uk/jobs/solution-architect-jobs-in-london?pageno=1&salaryfrom=80000&proximity=50',
  outerSelector: 'article.job-result',
  innerSelector: 'div.description p'
}
scrapeJobs(reedJobs).then((output: string) => console.log(output));

// https://www.monster.co.uk/jobs/search/?q=Solutions-Architect&where=London&salmin=80000&saltyp=1&nosal=false&cy=uk - loads jobs dynamically through JavaScript, so not present in HTML
