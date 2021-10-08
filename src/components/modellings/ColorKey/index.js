import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const ColorKey = ({ groupA, groupB, groupC, groupD }) => {
  const keySorted =
    groupA || groupB || groupC || groupD ? (
      <div className="item-color">
        <div className="box-color sortkey"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="item-color">
        <span></span>
      </div>
    );

  const keyA = groupA ? (
    <div className="item-color">
      <div className="box-color gpA"></div>
      <span>{groupA}</span>
    </div>
  ) : null;

  const keyB = groupB ? (
    <div className="item-color">
      <div className="box-color gpB"></div>
      <span>{groupB}</span>
    </div>
  ) : null;

  const keyC = groupC ? (
    <div className="item-color">
      <div className="box-color gpC"></div>
      <span>{groupC}</span>
    </div>
  ) : null;

  const keyD = groupD ? (
    <div className="item-color">
      <div className="box-color gpD"></div>
      <span>{groupD}</span>
    </div>
  ) : null;

  return (
    <div className="ColorKey">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </div>
  );
};

ColorKey.propTypes = {
  groupA: PropTypes.string,
  groupB: PropTypes.string,
  groupC: PropTypes.string,
  groupD: PropTypes.string,
};

export default ColorKey;
