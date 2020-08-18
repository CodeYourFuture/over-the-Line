import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Link
        className="h1-link"
        activeClass="active"
        to="artists"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <h1 className="h1-over-the-line">Over the line</h1>
      </Link>
    </div>
  );
};
