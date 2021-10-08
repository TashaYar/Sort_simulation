import React from "react";
import "./style.css";
import github from "../Footer/git.svg";
const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed <span className="Footer__Heart"></span> by{" "}
        <a
          href="https://www.linkedin.com/in/ps-10/"
          target="_blank"
          className="Footer__Link"
        >
          Pallavi Singh
        </a>
        &nbsp;&&nbsp;
        <a
          href="https://www.linkedin.com/in/praks03/"
          target="_blank"
          className="Footer__Link"
        >
          Prakhar Srivastava
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://github.com/TashaYar/Sort_simulation"
          target="_blank"
          className="Footer__Link"
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
