import React from "react";
import { connect } from "react-redux";
import { name } from "../redux/name";

const Name = ({ name, named }) => (
  <>
    <h1> The Cat is called {named}</h1>
    <input class={named} />
    <button onClick={() => name()}> name the Cat</button>
  </>
);

export default Name;
