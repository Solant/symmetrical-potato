import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
  return <h1>Hello World! {props.example}</h1>;
}

function mapStateToProps(state) {
  return {
    example: state.example,
  };
}

export default connect(mapStateToProps)(Home);
