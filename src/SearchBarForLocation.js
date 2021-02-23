import React from "react";

class SearchBarForLocation extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmited(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
    <label class="label">Where</label>
  </div>

            <input
              type="text"
              className="is-rounded input is-primary"
              placeholder="Enter location"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBarForLocation;
