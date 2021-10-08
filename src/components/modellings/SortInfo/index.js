import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import welcome from "../SortInfo/Welcome.svg";
const SortInfo = ({ title, description, worstCase }) => {
  return (
    <div className="SortInfo">
      <h1>{title ? title : <h3 className="bien">Bienvenidos!</h3>}</h1>

      <div
        className="row infoBody"
        style={{ justifyContent: description ? "" : "center" }}
      >
        <article className=" info-art">
          {description ? (
            description
          ) : (
            <div className="withnocon">
              <span>
                <img src={welcome} alt="magic" />
              </span>
              <p className="wel">
                Hello! This is a Sorting Algorithm Simulator. You need to select
                an algorithm to see Magic.🪄
              </p>
            </div>
          )}
        </article>
        {worstCase ? (
          <aside className=" aside-info">
            <h3>Pseudo Code</h3>
            <div>
              <p>{worstCase}</p>
            </div>
          </aside>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object,
};

export default SortInfo;
