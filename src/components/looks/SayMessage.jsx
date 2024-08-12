import React, { useState } from "react";
import { connect } from "react-redux";

function SayMessage({ character, comp_id }) {
  const [state, setState] = useState({
    show_msg: false,
    message: "",
    character_id: "",
  });

  /* Display Message */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    el.style.display = "block";
    el.style.position = "relative";

    el2.style.display = "none";

    window.clearTimeout();
    el.innerHTML = state.message;
  };

  return (
    <div>
      <div className="rounded text-center bg-gradient-to-r from-blue-600 to-violet-600 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message :</div>
          <input
            className="mx-2 p-1 py-0 text-center rounded-md"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, message: e.target.value });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex text-center flex-row flex-wrap rounded-md bg-white text-black px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()}
        >
          {`Say : ${state.message}`}
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

export default connect(mapStateToProps)(SayMessage);
