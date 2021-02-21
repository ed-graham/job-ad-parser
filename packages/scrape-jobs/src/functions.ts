import axios, { AxiosResponse } from 'axios';
import jsdom from 'jsdom';
import { IScrapedJobs, IScrapeJobs } from './types'

const { JSDOM } = jsdom;

export const scrapeJobs = async (scrapeJob: IScrapeJobs): Promise<IScrapedJobs> => {
  let scrapedJobs: IScrapedJobs = { html: '', jobs: []};
  await axios
    .get(scrapeJob.url)
    .then(function (response: AxiosResponse) {
      // handle success
      const dom: jsdom.JSDOM = new JSDOM(response.data);
      // combine all the individual HTML elements together in one string
      dom.window.document
        .querySelectorAll(
          `${scrapeJob.outerSelector} ${scrapeJob.innerSelector}`
        )
        .forEach((element: any) => {
          // scrape individual jobs
          scrapedJobs.jobs.push({link: '', html: element.textContent});
          // combine all jobs into a single HTML blob
          scrapedJobs.html = scrapedJobs.html.concat(
            '<br /><br />' + element.textContent
          );
        });
      return scrapedJobs;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    });
  return scrapedJobs;
};
