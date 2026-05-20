// script.js

// =========================
// DASHBOARD CARD EFFECT
// =========================

const dashCards = document.querySelectorAll(".dash-card");

dashCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "scale(1.02)";
    card.style.transition = "0.3s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "scale(1)";

  });

});


// =========================
// REVIEW BUTTON
// =========================

const reviewBtn = document.querySelector(".review-btn");

if(reviewBtn){

  reviewBtn.addEventListener("click", () => {

    alert("Review Added Successfully!");

  });

}


// =========================
// STAR EFFECT
// =========================

const stars = document.querySelectorAll(".light i");

stars.forEach((star, index) => {

  star.addEventListener("mouseenter", () => {

    for(let i = 0; i <= index; i++){

      stars[i].style.color = "#f7c600";

    }

  });

  star.addEventListener("mouseleave", () => {

    stars.forEach(s => {

      s.style.color = "#eee";

    });

  });

});


// =========================
// RANGE SLIDER
// =========================

const range = document.querySelector("input[type='range']");

if(range){

  range.addEventListener("input", () => {

    console.log("Slider Value :", range.value);

  });

}


// =========================
// MISSION BOX EFFECT
// =========================

const missionBox = document.querySelector(".center-box");

if(missionBox){

  missionBox.addEventListener("mouseenter", () => {

    missionBox.style.transform = "scale(1.02)";
    missionBox.style.transition = "0.3s";

  });

  missionBox.addEventListener("mouseleave", () => {

    missionBox.style.transform = "scale(1)";

  });

}


// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {

  console.log("Website Loaded Successfully");

});