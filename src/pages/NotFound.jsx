import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const vantaRef = useRef();

  useEffect(() => {
    if (vantaRef.current && window.VANTA) {
      VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f60ff
      })
    }
    

  }, []);

  return (
    <>
      <section className="background" ref={vantaRef}></section>
      <div className="main__wrapper">
        <div className="main">
          <div className="antenna">
            <div className="antenna__shadow"></div>
            <div className="a1"></div>
            <div className="a1d"></div>
            <div className="a2"></div>
            <div className="a2d"></div>
            <div className="a_base"></div>
          </div>
          <div className="tv">
            <div className="cruve">
              <svg className="curve__svg" viewBox="0 0 189.929 189.929">
                <path
                  d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                ></path>
              </svg>
            </div>
            <div className="display__div">
              <div className="screen__out">
                <div className="screen__out1">
                  <div className="screen">
                    <span className="notfound__text"> NOT FOUND</span>
                    <span className="notfound__text">
                      {" "}
                      Go Next channel to go Main
                    </span>
                  </div>
                  <div className="screenM">
                    <span className="notfound__text"> NOT FOUND</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <Link to='/' className="buttons__div">
              <div className="b1">
                <div></div>
              </div>
              <div className="b2"></div>
              <div className="speakers">
                <div className="g1">
                  <div className="g11"></div>
                  <div className="g12"></div>
                  <div className="g13"></div>
                </div>
                <div className="g"></div>
                <div className="g"></div>
              </div>
            </Link>
          </div>
          <div className="bottom">
            <div className="base1"></div>
            <div className="base2"></div>
            <div className="base3"></div>
          </div>
        </div>
        <div className="text_404">
          <div className="text_4041">4</div>
          <div className="text_4042">0</div>
          <div className="text_4043">4</div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
