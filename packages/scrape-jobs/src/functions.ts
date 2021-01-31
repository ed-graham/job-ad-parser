import axios, { AxiosResponse } from 'axios';
import jsdom from 'jsdom';
import { IScrapeJobs } from './types'

const { JSDOM } = jsdom;

export const scrapeJobs = async (scrapeJob: IScrapeJobs): Promise<string> => {
  let htmlFragment: string = '';
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
          htmlFragment = htmlFragment.concat(
            '<br /><br />' + element.textContent
          );
        });
      return htmlFragment;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    });
  return htmlFragment;
};
