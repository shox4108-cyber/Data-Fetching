import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../store/api";

const Details = () => {
  const netRef = useRef(null);
  const { type, id } = useParams();
  const { data } = useGetDetailsQuery({type, id});

  const renderImage = () => {
    if (type == "users") {
      return (
        <div className="spider__container center">
          <div className="rope center">
            <div className="legs center">
              <div className="boot-l"></div>
              <div className="boot-r"></div>
            </div>
            <div className="costume center">
              <div className="spider">
                <div className="s1 center"></div>
                <div className="s2 center"></div>
                <div className="s3"></div>
                <div className="s4"></div>
              </div>
              <div className="belt center"></div>
              <div className="hand-r"></div>
              <div className="hand-l"></div>
              <div className="neck center"></div>
              <div className="mask center">
                <div className="eye-l"></div>
                <div className="eye-r"></div>
              </div>
              <div className="cover center"></div>
            </div>
          </div>
        </div>
      );
    } else if (type == "todos") {
      return (
        <div className="cube-loader">
          <div className="cube-top"></div>
          <div className="cube-wrapper">
            <span style={{ "--i": 0 }} className="cube-span"></span>
            <span style={{ "--i": 1 }} className="cube-span"></span>
            <span style={{ "--i": 2 }} className="cube-span"></span>
            <span style={{ "--i": 3 }} className="cube-span"></span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="🤚">
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="🌴"></div>
          <div className="👍"></div>
        </div>
      );
    }
  };

  const renderInfo = () => {
    if (type == "users") {
      return (
        <>
          <div className="details__content-title">
            {data.name} | @{data.username}
          </div>
          <div className="details__content-subtitle">
            <span>Email:</span> {data.email}
          </div>
          <div className="details__content-subtitle">
            <span>Phone:</span> {data.phone}
          </div>
          <div className="details__content-subtitle">
            <span>Website:</span> {data.website}
          </div>
          <div className="details__content-subtitle">
            <span>Workplace:</span> {data.company.name} Company
          </div>
          <div className="details__content-subtitle">
            <span>Address:</span> {data.address.city} City,{" "}
            {data.address.street} Street, {data.address.suite}
          </div>
        </>
      );
    } else if (type == "todos") {
      return (
        <>
          <div className="details__content-title">
            <span>TASK:</span> {data.title}
          </div>
          <div
            className={`details__content-subtitle-todo ${
              data.completed
                ? "details__content-subtitle-todo-green"
                : "details__content-subtitle-todo-red"
            }`}
          >
            {data.completed
              ? "✅ Task is Completed"
              : "❌ Task still waiting your completion"}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="details__content-title"> {data.title}</div>
          <div className="details__content-subtitle"> {data.body}</div>
        </>
      );
    }
  };

  useEffect(() => {
    if (netRef.current) {
      VANTA.NET({
        el: netRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xceadf7,
        backgroundColor: 0x1b0d2f,
      });
    }
  }, []);

  return (
    <>
      <div ref={netRef} className="background"></div>
      {data ? (
        <div className="container">
          <div className="details">
            <div className="details__title">{`Detail Page | ${type}(${id})`}</div>
            <div className="details__content ">
              <div className="details__content-img">{renderImage()}</div>
              <div className="details__content-box">{renderInfo()}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <div className="loading__box">
            <div className="card__loader">
              <svg className="card__loader-outer" viewBox="0 0 86 86">
                <circle className="back" cx="43" cy="43" r="40" />
                <circle className="front" cx="43" cy="43" r="40" />
                <circle className="new" cx="43" cy="43" r="40" />
              </svg>
              <svg className="card__loader-middle" viewBox="0 0 60 60">
                <circle className="back" cx="30" cy="30" r="27" />
                <circle className="front" cx="30" cy="30" r="27" />
              </svg>
              <svg className="card__loader-inner" viewBox="0 0 34 34">
                <circle className="back" cx="17" cy="17" r="14" />
                <circle className="front" cx="17" cy="17" r="14" />
              </svg>
              <div className="card__loader-text" data-text="Loading"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
