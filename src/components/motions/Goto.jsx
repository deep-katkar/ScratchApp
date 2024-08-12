import React, { useState } from "react";
import { connect } from "react-redux";

function Goto({ character, comp_id }) {
  const [state, setState] = useState({
    goto_x: 0,
    goto_y: 0,
  });

  // go to posiiton X and Y
  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    el.style.position = "relative";
    el.style.left = state.goto_x + "px";
    el.style.top = state.goto_y + "px";
  };

  return (
    <div>
      <div className="text-center rounded bg-gradient-to-r from-emerald-500 to-indigo-600 p-2 my-1">
        <div className="grid grid-cols-2 my-1">
          <div className="text-white">X :</div>
          <input
            className="mx-2 p-1 py-0 text-center rounded-lg"
            type="number"
            value={state.goto_x}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_x: parseInt(e.target.value) });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Y :</div>
          <input
            className="mx-2 p-1 py-0 text-center rounded-lg"
            type="number"
            value={state.goto_y}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_y: parseInt(e.target.value) });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="text-center bg-white text-black px-1 py-1 my-1 text-sm rounded-md cursor-pointer"
          onClick={() => gotoXY()}
        >
          Go to X : {state.goto_x} & Y : {state.goto_y}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Goto);
