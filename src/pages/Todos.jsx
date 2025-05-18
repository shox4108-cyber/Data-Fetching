import React, { useEffect, useState } from "react";
import {
  IoAlert,
  IoChatbubblesOutline,
  IoCheckmarkDone,
} from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { Link } from "react-router-dom";

const Todos = ({ vantaBirdsRef }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      setData(result.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  const searchData = (event) => {
    event.preventDefault();
    if (!data) return;

    const searchedData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(searchedData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const searchedData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(searchedData);
  }, [search, data]);

  const renderLoader = (text) => (
    <div
      className={`loading ${
        todosToDisplay && todosToDisplay.length <= 0 ? "search" : ""
      }`}
    >
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
          <div className="card__loader-text" data-text={text}></div>
        </div>
      </div>
    </div>
  );

  const todosToDisplay = search === "" ? data : filteredData;

  return (
    <>
      <section className="background" ref={vantaBirdsRef}></section>
      {!data ? (
        renderLoader("Loading")
      ) : (
        <div className="container info">
          <div className="info__context">
            <div className="info__context-card1"></div>
            <div className="info__context-card2"></div>
            <h2 className="info__context-card3">Todos Page</h2>
          </div>
          <form className="info__input" onSubmit={searchData}>
            <div className="info__input-container">
              <div className="info__input-shadow"></div>
              <button className="info__input-button" type="submit">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  height="20px"
                  width="20px"
                >
                  <path
                    d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                    fillRule="evenodd"
                    fill="#17202A"
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                name="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="info__input-search"
                placeholder="What do you want to search?"
              />
            </div>
          </form>

          {todosToDisplay && todosToDisplay.length > 0 ? (
            <div className="info__cards">
              {todosToDisplay.map((todo) => (
                <Link
                  to={`/todos/${todo.id}`}
                  className="info__card link"
                  key={todo.id}
                >
                  <div className="info__card-img">
                    <LuListTodo/>
                  </div>
                  <div className="info__card-info">
                    <div className="info__card-text">
                      <p className="info__card-subtitle">Task № {todo.id}</p>
                      <p className="info__card-title">{todo.title}</p>
                    </div>
                    <div className="info__card-icons">
                      <svg className="info__card-icon" viewBox="0 0 28 25">
                        <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="info__card-todo">
                    {todo.completed ? (
                      <>
                        <IoCheckmarkDone className="info__card-todo-green" />
                        <span style={{ textShadow: "0 0 8px rgb(0, 255, 0)" }}>
                          Done
                        </span>
                      </>
                    ) : (
                      <>
                        <IoAlert className="info__card-todo-red" />
                        <span style={{ textShadow: "0 0 8px rgb(255, 0, 0)" }}>
                          UnDone
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            renderLoader("No Result")
          )}
        </div>
      )}
    </>
  );
};

export default Todos;
