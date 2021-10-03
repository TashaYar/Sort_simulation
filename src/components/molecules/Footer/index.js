import React from "react";
import "./style.css";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with <span className="Footer__Heart">&hearts;</span>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/ps-10/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Pallavi Singh
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.linkedin.com/in/praks03/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Prakhar Srivastava
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://github.com/ramiz-rahman/sort-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          github
        </a>
      </section>
    </footer>
  );
};

export default Footer;
