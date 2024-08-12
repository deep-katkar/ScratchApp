import React, { useState } from "react";
import { connect } from "react-redux";

function SayMessageWithTimer({ character, comp_id }) {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  /* Display Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el2.style.display = "none";
    if (state.show_msg) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });

    el.style.display = "block";
    el.style.position = "relative";

    el.innerHTML = state.timer_message;
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <div>
      <div className="rounded text-center bg-gradient-to-r from-blue-600 to-violet-600 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message :</div>
          <input
            className="mx-2 p-1 py-0 text-center rounded-md"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timer_message: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Timer :</div>
          <input
            className="mx-2 p-1 py-0 text-center rounded-md"
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timer_for_msg: parseInt(e.target.value) });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex flex-row flex-wrap text-center bg-white text-black px-2 py-1 my-2 
          text-sm cursor-pointer rounded-md"
          onClick={() => displayMessage()}
        >
          {`Say : ${state.timer_message}`}
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

export default connect(mapStateToProps)(SayMessageWithTimer);
