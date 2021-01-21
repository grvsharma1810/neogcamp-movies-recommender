import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var movieDb = {
    Horror: [
      {
        title: "Insidious",
        rating: "5/5"
      },
      {
        title: "Bird Box",
        rating: "4/5"
      },
      {
        title: "Sinister",
        rating: "4.5/5"
      }
    ],
    "Sci-fi": [
      {
        title: "Iron Man Series",
        rating: "5/5"
      },
      {
        title: "Star Wars",
        rating: "4.5/5"
      },
      {
        title: "Armageddon",
        rating: "4/5"
      }
    ],
    Action: [
      {
        title: "Black Panther",
        rating: "5/5"
      },
      {
        title: "John Wick",
        rating: "3.5/5"
      },
      {
        title: "Exctraction",
        rating: "5/5"
      }
    ]
  };

  var [category, setCategory] = useState("Horror");

  function categoryClickHandeler(category) {
    console.log(category);
    setCategory(category);
  }

  return (
    <div className="App">
      <div className="container">
        <header className="header">🎬 goodmovies</header>
        <div>Checkout my favorite movies. Select a genre to get started</div>
        <div className="categoryList">
          {Object.keys(movieDb).map(function (category) {
            return (
              <button
                keys={category}
                onClick={() => categoryClickHandeler(category)}
                className="category"
              >
                {category}
              </button>
            );
          })}
        </div>
        <hr />
        {movieDb[category].map(function (movie) {
          return (
            <div className="movie">
              <h4>{movie.title}</h4>
              <span>{movie.rating}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
