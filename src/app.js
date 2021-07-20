/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const getCard = list => {
    let randomNumber = Math.floor(Math.random() * list.length);

    return list[randomNumber];
  };

  document.querySelector(".card-center").innerHTML = getCard(cardList);
};
