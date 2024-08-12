import React, { useState } from "react";
import { connect } from "react-redux";
import { FaRedo } from "react-icons/fa";
import { setAngle } from "../../redux/character/charSlice";

function TurnClockWise({ character, characterAngle, comp_id }) {
  const [angle, setAngle] = useState(0);

  const handleClick = () => {
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + angle}deg)`;
      characterAngle(character_angle.angle + angle);
    }
  };

  return (
    <div>
      <div className="text-center rounded bg-gradient-to-r from-emerald-500 to-indigo-600 p-2 my-3">
        <div
          id={comp_id}
          className="flex flex-row align-middle gap-1"
          onClick={() => handleClick()}
        >
          <div className="text-white">Rotate By :</div>
          <FaRedo size={20} className="text-white justify-center pt-1" />
          <input
            className="mx-1 p-1 w-12 py-0 text-center rounded-lg"
            type="number"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
          />
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

// mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setAngle({ angle })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnClockWise);
