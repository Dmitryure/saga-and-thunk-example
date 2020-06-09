import React from "react";
import { connect } from "react-redux";
import { fetchTodo } from "../redux/actions";

class List extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchAction('https://swapi.dev/api/people/1')
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

const mapDispatchToProps = dispatch => {
    return {
        fetchAction: (url) => dispatch(fetchTodo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
