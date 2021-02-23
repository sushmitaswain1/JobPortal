import React from "react";
import JobBriefList from "./JobBriefList";
import SearchBarForName from "./SearchBarForName";
import SearchBarForLocation from "./SearchBarForLocation";
import jobData from "./Data";
import JobDetails from "./JobDetails";

class JobBrief extends React.Component {

  state = {
    jobs: jobData,
    isLoading: false,
    selectedJob: null,
  };

  // componentDidMount() {
  //   // Start counting when the page is loaded
  //   setTimeout(() => {
  //     this.setState({ isLoading: true });
  //     // Add your logic for the transition
  //   }, 5000);
  // }

  onSearchSubmit = (term) => {
    const filteredJobs = this.state.jobs.filter((job) => {
      return job.name.toLowerCase().includes(term.toLowerCase());
    });
    console.log(filteredJobs);
    this.setState({ jobs: filteredJobs });
  };

  onTermSubmit = (term) => {
    const filteredJobs = this.state.jobs.filter((job) => {
      return job.location.city.toLowerCase().includes(term.toLowerCase());
    });
    this.setState({ jobs: filteredJobs });
  };

  onClickTerm = (el) => {
    this.setState({ selectedJob: el });
  };

  render() {
    // console.log(this.props.jobData);
    // if (this.state.isLoading === false) {
    //   return (
    //     <div className="spinner">
    //       <Loader message="Loading..." />
    //     </div>

    //     // <div className='load'>Loading.......</div>
    //   );
    // } else
      return (
        <div>
         <section className="section">
         <div class=" ui grid">
            <div id="parent_div_1">
              <SearchBarForName onSubmitt={this.onSearchSubmit} />
            </div>
            <div id="parent_div_2">
              <SearchBarForLocation onSubmited={this.onTermSubmit} />
            </div>
          </div>

         </section>
         
        
          <div >
            <div class="ui grid">
              <div class="ui row">
                <div class="">
                  {this.state.selectedJob !== null ? (
                    <JobDetails job={this.state.selectedJob} />
                  ) : (
                    <div> </div>
                  )}
                </div>
                <div >
                  {this.state.jobs.map((work) => (
                    <JobBriefList task={this.onClickTerm} work={work} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default JobBrief;
