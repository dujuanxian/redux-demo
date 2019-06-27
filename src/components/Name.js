import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setName } from "../actions";

class Name extends React.Component {
  render() {
    return (
      <Fragment>
        <label>
          Input your name, please!
          <input type="text" onChange={this.props.handleNameChange} />
        </label>
        <p>Hi, {this.props.name}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ name }) => ({
  name
});

const mapDispatchToProps = dispatch => ({
  handleNameChange(event) {
    dispatch(setName(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);
