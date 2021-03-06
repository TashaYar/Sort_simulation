import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Menu from "../Menu";

const AppControls = ({
  algorithm,
  onAlgorithmChange,
  arraySize,
  onArraySizeChange,
}) => {
  return (
    <Fragment>
      <Menu
        placeholder="Select Algorithm"
        items={[
          "Bubble Sort",
          "Selection Sort",
          "Insertion Sort",
          "Merge Sort",
          "Quick Sort",
        ]}
        selected={algorithm}
        onSelect={onAlgorithmChange}
      />

      <div className="size-control">
        <span>Select Size</span>
        <Menu
          placeholder="Array Size"
          items={["5", "10", "25"]}
          selected={String(arraySize)}
          onSelect={onArraySizeChange}
        />
      </div>
    </Fragment>
  );
};

AppControls.propTypes = {
  algorithm: PropTypes.string,
  onAlgorithmChange: PropTypes.func.isRequired,
  onGenerateRandomArray: PropTypes.func.isRequired,
  arraySize: PropTypes.number,
  onArraySizeChange: PropTypes.func.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
};

export default AppControls;
