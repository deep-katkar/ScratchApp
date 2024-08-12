import React, { useState } from "react";
import { FaUndo } from "react-icons/fa";
import { connect } from "react-redux";
import { setAngle } from "../../redux/character/charSlice";

function TurnAntiClockWise({ character, characterAngle, comp_id }) {
  const [angle, setCharAngle] = useState(0);

  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
      characterAngle(character_angle.angle + anti_angle);
    }
  };

  return (
    <div>
      <div className="text-center rounded bg-gradient-to-r from-emerald-500 to-indigo-600 p-2 my-3">
        <div
          id={comp_id}
          onClick={() => handleClick()}
          className="flex flex-row align-middle gap-1"
        >
          <div className="text-white">Rotate By :</div>
          <FaUndo size={20} className="text-white justify-center pt-1" />
          <input
            className="mx-1 p-1 w-12 py-0 text-center rounded-lg"
            type="number"
            value={angle}
            onChange={(e) => setCharAngle(parseInt(e.target.value))}
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

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockWise);
