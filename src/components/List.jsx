import React from "react";
import { connect } from "react-redux";
import { fetchTodo } from "../redux/actions";

class List extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchAction()
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
        fetchAction: () => dispatch(fetchTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
