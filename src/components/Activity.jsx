import React from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";

import UpdateName from "./Name";

const Activity = ({ activity, name, setActivity }) => (
  <>
    <h1>What is the cat doing?</h1>
    <p>
      {name} is {activity.activity}
    </p>

    <button onClick={() => setActivity("eating")}>Eating</button>
    <button onClick={() => setActivity("playing")}>Play</button>
    <button onClick={() => setActivity("napping")}>nap</button>
    <UpdateName />
  </>
);
const mapStateToProps = (state) => {
  const { activity, name } = state;
  return { activity, name };
};

export default connect(mapStateToProps, { setActivity })(Activity);
