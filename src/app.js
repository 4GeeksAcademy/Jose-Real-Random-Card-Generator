/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suits = ["♦", "♥", "♠", "♣"];

  function randomValue() {
    return Math.floor(Math.random() * values.length);
  }

  function randomSuit() {
    return Math.floor(Math.random() * suits.length);
  }

  function randomCard() {
    let value = document.getElementById("value");
    let newValue = values[randomValue()];
    value.innerHTML = newValue;

    let suit = document.getElementsByClassName("suit");
    let newSuit = suits[randomSuit()];

    for (let i = 0; i < suit.length; i++) {
      suit[i].innerHTML = newSuit;
      if (newSuit === "♦" || newSuit === "♥") {
        value.style.color = "red";
        suit[i].style.color = "red";
      } else {
        value.style.color = "black";
        suit[i].style.color = "black";
      }
    }
    let cardImg = document.querySelector(".card-img");
    cardImg.classList.add("hidden");
  }

  let cardImg = document.querySelector(".card-img");
  cardImg.classList.remove("hidden");

  const button = document.getElementById("new-card-button");
  button.addEventListener("click", randomCard);
};
