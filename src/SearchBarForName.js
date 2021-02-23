import React from "react";

class SearchBarForName extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitt(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">What</label>
            </div>

            <input
              type="text"
              className="is-rounded input is-primary"
              placeholder="Enter position"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBarForName;
