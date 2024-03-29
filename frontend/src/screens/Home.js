import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Shimmer from "../components/Shimmer";
import Burger from "../images/Burger.jpg";
import dessert from "../images/dessert.jpg";
import Dumplings from "../images/Dumplings.jpg";
// import Carousal from "../components/Carousal";

// let a = "https://foodiee-mern.vercel.app";
// let p = async function () {
//   let data = await fetch("https://foodiee-mern.vercel.app/api/foodData");
//   let k = await data.json();
//   console.log(k);
//   // console.log(data);
// };
// p();

// console.log(process.env.REACT_APP_HOSTT);
export default function Home() {
  const [foodCategory, setFoodCategory] = useState([1]);
  const [foodData, setFoodData] = useState([1]);
  const [search, setSearch] = useState("");

  let loadDAta = async () => {
    let response = await fetch(process.env.REACT_APP_HOSTT + "/api/fooddata/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setFoodData(response[0]);
    setFoodCategory(response[1]);
  };

  useEffect(() => {
    loadDAta();
  }, []);

  // if (!foodCategory) setFoodCategory(1);
  // if (!foodData) setFoodCategory(1);
  console.log(foodData, foodCategory);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel  "
          style={{ objectFit: "contain !important" }}
        >
          <div
            className="carousel-inner"
            style={{ "max-height": "500px", "min-height": "399px" }}
          >
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Food here.."
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>

            <div className="carousel-item active">
              <img
                src={Burger}
                className="d-block w-100"
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
      <div className="container">
        {/* {foodCategory.length == 0 ? <div>hii</div> : <div>by</div>} */}
        {foodCategory.length === 1 ? (
          <div className="row mb-3">
            <Shimmer />
          </div>
        ) : (
          foodCategory.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-sm-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodData.length !== 1 ? (
                  foodData
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            // foodName={filterItems.name}
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                            // imgSrc={filterItems.img}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>No Such Data Found</div>
                )}
              </div>
            );
          })
        )}
      </div>

      <Footer />
    </>
  );
}
