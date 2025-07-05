
import React from "react";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  const menu_list = [
    {
      name: "Burgers",
      image: "/3.jpg",
    },
    {
      name: "Rolls",
      image: "/roll.jpg",
    },
    {
      name: "Pizza",
      image: "pizza.jpg",
    },
    {
      name: "Sandwiches",
      image: "sandwiches.jpg",
    },
    {
      name: "Pasta",
      image: "/pasta.jpg",
    },
    {
      name: "Noodles",
      image: "/noodles.jpg",
    },
    {
      name: "Soups",
      image: "/soap.jpg",
    },
    {
      name: "Salads",
      image: "/salad.jpg",
    },
    {
      name: "Drinks",
      image: "/drink.jpg",
    },
    {
      name: "BreakFast",
      image: "/break.jpg",
    },
  ];
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Our <span>Menu</span></h1>
        <p className="explore-menu-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          repellat asperiores dolorum, tenetur aliquam voluptate velit fugit,
          illo doloribus esse obcaecati officiis earum! Laborum quaerat, ipsa
          debitis eius qui accusamus.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory(prev => prev === item.name ? "All" : item.name)
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img className={category===item.name ? "active" : ""} src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ExploreMenu;
