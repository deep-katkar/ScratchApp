import React, { useState } from "react";
import { connect } from "react-redux";

function MoveY({ character, comp_id }) {
  const [steps, setSteps] = useState(0);

  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    var top = el.offsetTop;
    el.style.position = "relative";
    el.style.top = top + steps + "px";
  };

  return (
    <div>
      <div
        id={comp_id}
        className={`text-center rounded bg-gradient-to-r from-emerald-500 to-indigo-600 text-white p-3 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Move Y :
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

export default connect(mapStateToProps)(MoveY);
