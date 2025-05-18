import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrambleTextPlugin);

const Home = () => {
  const vantaRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    if (vantaRef.current && window.VANTA) {
      window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        xOffset: isSmallScreen? -0 : 0.21,
        yOffset: isSmallScreen? -0.20 : -0.05,
      });
    }

    gsap.to(titleRef.current, {
      duration: 2,
      scrambleText: {
        text: "Welcome to the Future",
        chars: "upperCase",
        revealDelay: 0.5,
      },
      delay: 0.2,
    });

    gsap.to(subtitleRef.current, {
      duration: 3,
      scrambleText: {
        text: "Where animation meets code.",
        chars: "lowerCase",
        revealDelay: 0.6,
      },
      delay: 2,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1130);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        style={{ height: "100vh", width: "100%" }}
        className="background"
      >
      </div>
      <div className="container home">
        <div className="home__context">
          <h1 ref={titleRef} className="home__context-title"></h1>
          <p ref={subtitleRef} className="home__context-subtitle"></p>
        </div>
      </div>
    </>
  );
};

export default Home;
