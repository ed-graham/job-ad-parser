import React from 'react'

export const JobListing: React.FC<IJobListing> = (jobListing: IJobListing) => {
    return (
      <div dangerouslySetInnerHTML={{
        __html: jobListing.htmlFragment
      }}></div>
    );
};
