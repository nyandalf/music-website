import { Midi } from "react-abc";

const notation = "C8 E8|";

function Player() {
  return <Midi notation={notation} />;
}

export default Player;
