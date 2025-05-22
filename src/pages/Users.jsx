import React, { useEffect, useState } from "react";
import { FaChalkboardUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../store/api";

const Posts = ({ vantaBirdsRef }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useGetUsersQuery();

  const searchData = (event) => {
    event.preventDefault();
    if (!data) return;

    const searchedData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(searchedData);
  };
  useEffect(() => {
    if (!data) return;
    const searchedData = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(searchedData);
  }, [search, data]);

  const renderLoader = (text) => (
    <div
      className={`loading ${
        usersToDisplay && usersToDisplay.length <= 0 ? "search" : ""
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

  const usersToDisplay = search === "" ? data : filteredData;

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
            <h2 className="info__context-card3">Users Page</h2>
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

          {usersToDisplay && usersToDisplay.length > 0 ? (
            <div className="info__cards">
              {usersToDisplay.map((user) => (
                <Link
                  to={`/users/${user.id}`}
                  className="info__card link"
                  key={user.id}
                >
                  <div className="info__card-img">
                    <FaChalkboardUser />
                  </div>
                  <div className="info__card-info">
                    <div className="info__card-text">
                      <p className="info__card-title">{user.name}</p>
                      <p className="info__card-subtitle">
                        Username: {user.username}
                      </p>
                      <p className="info__card-subtitle">Email: {user.email}</p>
                    </div>
                    <div className="info__card-icons">
                      <svg className="info__card-icon" viewBox="0 0 28 25">
                        <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                      </svg>
                    </div>
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

export default Posts;
