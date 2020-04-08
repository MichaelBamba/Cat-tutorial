import React from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";

const CatList = ({ cats, setActivity }) => {
  const catsArray = Object.keys(cats);

  return (
    <>
      <ul>
        {catsArray.map((catId, index) => {
          return (
            <li key={`cat-${index}`}>
              {cats[catId].name} is {cats[catId].activity}
              <button
                onClick={() => setActivity({ id: catId, activity: "eating" })}
              >
                Eating
              </button>
              <button
                onClick={() => setActivity({ id: catId, activity: "playing" })}
              >
                Playing
              </button>
              <button
                onClick={() => setActivity({ id: catId, activity: "napping" })}
              >
                Napping
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  const { cats } = state;
  return cats;
};

export default connect(mapStateToProps, { setActivity })(CatList);
