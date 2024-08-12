import React from "react";
import Move from "./motions/Move";
import MoveY from "./motions/MoveY";
import TurnClockWise from "./motions/TurnClockWise";
import TurnAntiClockWise from "./motions/TurnAntiClockWise";
import GotoXY from "./motions/Goto";
import SayMessage from "./looks/SayMessage";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Think from "./looks/Think";
import ThinkWithTimer from "./looks/ThinkWithTimer";
import HideMessage from "./looks/HideMessage";
import Repeat from "./control/Repeat";

function GetComponent(keyID, id) {
  switch (keyID) {
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    case "MOVE":
      return <Move comp_id={id} />;
    case "TURN_CLOCKWISE":
      return <TurnClockWise comp_id={id} />;
    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockWise comp_id={id} />;
    case "GOTO_XY":
      return <GotoXY comp_id={id} />;
    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;
    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} />;
    case "THINK":
      return <Think comp_id={id} />;
    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} />;
    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} />;
    case "REPEAT":
      return <Repeat comp_id={id} />;
    default:
      return React.null;
  }
}

export default GetComponent;
