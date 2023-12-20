import React from "react";

import "./SmoothScroll.css";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }: any) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = React.useRef(null);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 100,
  };

  React.useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      //@ts-ignore
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  React.useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    //@ts-ignore
    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
