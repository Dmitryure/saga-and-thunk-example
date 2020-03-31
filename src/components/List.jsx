import React from "react";
import { connect } from "react-redux";
import { requestFetch } from "../redux/actions";

class List extends React.Component {
  state = {};

  componentDidMount() {
    // так же появляется в пропсах, ничего нового
    this.props.fetchAction("https://swapi.co/api/people/1");
  }

  render() {
    return <div>{JSON.stringify(this.props.data)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

// забираем action, который будет запускать saga
const mapDispatchToProps = dispatch => {
  return {
    fetchAction: url => dispatch(requestFetch(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
