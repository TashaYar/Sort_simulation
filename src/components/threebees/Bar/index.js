import React from "react";
import "./style.css";

const Bar = ({
  width,
  height,
  val,
  stateA,
  stateB,
  stateC,
  stateD,
  sorted,
  style,
}) => {
  let classNames = "Bar";
  if (sorted) classNames += " br-sort";
  if (stateD) classNames += " br-D";
  else if (stateC) classNames += " br-C";
  else if (stateB) classNames += " br-B";
  else if (stateA) classNames += " br-A";

  let BarStyle = { ...style, width: `${width}%`, height: `${height}%` };
  if (stateA || stateB || stateC || stateD) {
    BarStyle["marginRight"] = `${0.3 * width}%`;
    BarStyle["marginLeft"] = `${0.3 * width}% `;
  }

  return (
    <div style={BarStyle} className={classNames}>
      <span className="br-text">{val}</span>
    </div>
  );
};

export default Bar;
