import React, { useState } from "react";
import { connect } from "react-redux";

function Move({ character, comp_id }) {
  const [steps, setSteps] = useState(0);

  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    var left = el.offsetLeft;
    el.style.position = "relative";
    el.style.left = left + steps + "px";
  };

  return (
    <div>
      <div
        id={comp_id}
        className={`text-center rounded bg-gradient-to-r from-emerald-500 to-indigo-600 text-white p-3 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Move X :
        <input
          type="number"
          className="text-black text-center w-10 mx-2 rounded-md"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))}
        />{" "}
        Steps
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Move);
