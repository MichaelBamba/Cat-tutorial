import React from "react";
import { connect } from "react-redux";

import { setActivity } from "../redux/actions";

const Activity = ({ activity, setActivity }) => (
  <>
    <h1>What is the cat doing?</h1>
    <p>The cat is {activity}</p>
    <button onClick={() => setActivity("eat")}>Eating</button>
    <button onClick={() => setActivity("play")}>Play</button>
    <button onClick={() => setActivity("nap")}>nap</button>
  </>
);
const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};

export default connect(mapStateToProps, { setActivity })(Activity);
