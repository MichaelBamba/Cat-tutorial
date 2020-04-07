import React from "react";
import { connect } from "react-redux";

const Name = ({ name }) => (
  <>
    <h1> The Cat is called {name}</h1>
    <input class="name" />
    <button onClick={() => name()}> name the Cat</button>
  </>
);

export default Name;
