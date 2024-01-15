import React from "react";
import Burger from "../images/Burger.jpg";
import dessert from "../images/dessert.jpg";
import Dumplings from "../images/Dumplings.jpg";

export default function () {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel  "
        style={{ objectFit: "contain !important" }}
      >
        <div
          className="carousel-inner"
          style={{ "max-height": "500px", "min-height": "499px" }}
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src={Burger}
              className="d-block w-100  "
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={Dumplings}
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={dessert}
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
