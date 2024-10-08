import React from "react";
import { connect } from "react-redux";

function HideMessage({ character, comp_id }) {
  const displayMessage = () => {
    window.clearTimeout();
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el.style.display = "none";
    el2.style.display = "none";
  };

  return (
    <div>
      <div
        id={comp_id}
        onClick={() => displayMessage()}
        className="rounded bg-gradient-to-r from-blue-600 to-violet-600 text-center text-white max-w-content p-1 my-3"
      >
        Hide Message
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideMessage);
