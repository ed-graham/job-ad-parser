import React, { useEffect, useState } from 'react';
import { JobListing } from './JobListing'
import { scrapeJobs, IScrapeJobs } from '@ed-graham/scrape-jobs';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [reedJobs, setReedJobs] = useState('');

  // const cvLibraryJobs: IScrapeJobs = {
  //   url: 'https://www.cv-library.co.uk/solution-architect-technical-lead-developer-jobs-in-cb25-9ft?distance=100&industry=13&salarymin=80000&us=1', //https://www.cv-library.co.uk/solution-architect-technical-lead-developer-jobs-in-cb25-9ft?distance=100&industry=13&salary_annual=8&salary_annual=7&us=1'
  //   outerSelector: 'li.results__item',
  //   innerSelector: 'p.job__description'
  // }
  
  // // https://www.cwjobs.co.uk/jobs/solution-architect/in-london?salary=80000&salarytypeid=1&postedwithin=14&radius=30&page=1 - same as jobsite
  // const jobSiteJobs: IScrapeJobs = {
  //   url: 'https://www.jobsite.co.uk/jobs/solutions-architect/in-london?salary=80000&salarytypeid=1&postedwithin=14&radius=30&page=1',
  //   outerSelector: 'div.job',
  //   innerSelector: 'p.job-intro'
  // }
  
  // https://www.cwjobs.co.uk/jobs/solution-architect/in-london?salary=80000&salarytypeid=1&postedwithin=14&radius=30&page=1 - same as jobsite
  const reedJobsInput: IScrapeJobs = {
    url: 'https://www.reed.co.uk/jobs/solution-architect-jobs-in-london?pageno=1&salaryfrom=80000&proximity=50',
    outerSelector: 'article.job-result',
    innerSelector: 'div.description p'
  }
  
  // console.log('Making the request to CV Library ...');
  // let cvLibraryJobsOutput: string = '';
  // const cvLibraryJobsPromise = scrapeJobs(cvLibraryJobs).then((output: string) => cvLibraryJobsOutput = output);

  // console.log('Making the request to Jobsite ...');
  // let jobSiteJobsOutput: string = '';
  // const jobSiteJobsPromise = scrapeJobs(jobSiteJobs).then((output: string) =>  jobSiteJobsOutput = output);
  
  // console.log('Making the request to Reed ...');
  let reedJobsOutput: string = '';
  // const reedJobsPromise = scrapeJobs(reedJobs).then((output: string) => reedJobsOutput = output);

  // useEffect(() => {
  //   Promise.all([cvLibraryJobsPromise, jobSiteJobsPromise, reedJobsPromise]).then((values) => {
  //     console.log('All promises have now been resolved');
  //     console.log(`cvLibraryJobsOutput: ${cvLibraryJobsOutput.length}`);
  //     console.log(`jobSiteJobsOutput: ${jobSiteJobsOutput.length}`);
  //     console.log(`reedJobsOutput: ${reedJobsOutput.length}`);
  //     [cvLibraryJobsOutput, jobSiteJobsOutput, reedJobsOutput] = values;
  //   });
  
  //   console.log('Got to here ... this SHOULD be the last thing that happens');
  // });

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    console.log('inside useEffect()');
    scrapeJobs(reedJobsInput).then((output: string) => {
      setIsLoaded(true);
      setReedJobs(output);
    });
  })

  console.log('outside useEffect');
  if (!isLoaded) {
      console.log('Loading ...');
      return <div>Loading...</div>;
  } else {    
    console.log('Loaded');
    console.log(`reedJobs: ${reedJobs.length}`);
    return (
      <div>
        <h1>Reed</h1><JobListing htmlFragment={reedJobs} />
      </div>
    );
  }

//  const [cvLibraryJobs, setCvLibraryJobs] = useState();
}

export default App;
