import React from "react";
import "./style.css";
import github from "../Footer/git.svg";
const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed <span></span> by{" "}
        <a
          href="https://www.linkedin.com/in/ps-10/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-foot"
        >
          Pallavi Singh
        </a>
        &nbsp;&&nbsp;
        <a
          href="https://www.linkedin.com/in/praks03/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-foot"
        >
          Prakhar Srivastava
        </a>
      </section>

      <section className="foot-item">
        <a
          href="https://github.com/TashaYar/Sort_simulation"
          target="_blank"
          rel="noopener noreferrer"
          className="link-foot"
        >
          <img
            className="g"
            src={github}
            alt="github"
            style={{ width: "2rem" }}
          />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
