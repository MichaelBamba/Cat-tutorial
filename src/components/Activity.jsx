import React from "react";
import { connect } from "react-redux";
import { eat } from "../redux/actions";
import { play } from "../redux/actions";
import { nap } from "../redux/actions";

const Activity = ({ activity, eat, nap, play }) => (
  <>
    <h1>What is the cat doing?</h1>
    <p>The cat is {activity}</p>
    <button onClick={() => eat()}>Eating</button>
    <button onClick={() => play()}>Play</button>
    <button onClick={() => nap()}>nap</button>
  </>
);
const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};

export default connect(mapStateToProps, { eat, nap, play })(Activity);
