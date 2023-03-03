"use strict";

/* DECLARATION DES VARIABLES */
var ul_voir_plus = document.getElementById("ul-voir-plus");
var li_voir_plus = document.getElementById("li-voir-plus");
var li_voir_moins = document.getElementById("li-voir-moins");
var accueil_aside_left = document.getElementsByClassName("accueil-aside-left")[0];
var lien_modifier = document.getElementById("lien-modifier");
var btn_right = document.querySelectorAll(".btn-right");
var next_icon = btn_right[0];
var next_icon_salon = btn_right[1];
/* var statuts = document.querySelector(".statuts-items") */

var statuts_sliders = document.querySelectorAll(".create-storie");
var body = document.querySelector("body");
var select_users = document.querySelector(".select-users");
var users_picture = select_users.querySelectorAll(".user-picture");
var slideIndex = 0;
/* ECOUTEURS D'EVENEMENT */

var listenerEvent = {
  seeMore: function seeMore() {
    ul_voir_plus.style.display = "block";
    ul_voir_plus.style.display = "flex";
    ul_voir_plus.style.flexDirection = "column";
    ul_voir_plus.style.gap = "30px";
    li_voir_plus.style.display = "none";
  },
  seeLess: function seeLess() {
    ul_voir_plus.style.display = "none";
    li_voir_plus.style.display = "block";
    li_voir_plus.style.display = "flex";
  },
  nextSlide: function nextSlide() {
    var index = slideIndex + 1;
    var indexMax = statuts_sliders.length - 5;
    var indexMax2 = statuts_sliders.length - 7;
    var indexMax3 = statuts_sliders.length - 9;

    if (window.getComputedStyle(body).width <= "500" && window.getComputedStyle(body).width <= "1600" && slideIndex < indexMax) {
      showSlide(index);
    } else if (window.getComputedStyle(body).width >= "1601" && window.getComputedStyle(body).width <= "2101" && slideIndex < indexMax2) {
      showSlide(index);
    } else if (slideIndex < indexMax3) {
      showSlide(index);
    }
  },
  nextSlideSalon: function nextSlideSalon() {
    var index = slideIndex + 1;
    var indexMax = statuts_sliders.length - 5;
    var indexMax2 = statuts_sliders.length - 7;
    var indexMax3 = statuts_sliders.length - 9;

    if (window.getComputedStyle(body).width <= "500" && window.getComputedStyle(body).width <= "1600" && slideIndex < indexMax) {
      showSlideSalon(index);
    } else if (window.getComputedStyle(body).width >= "1601" && window.getComputedStyle(body).width <= "2101" && slideIndex < indexMax2) {
      showSlideSalon(index);
    } else if (slideIndex < indexMax3) {
      showSlideSalon(index);
    }
  }
};
/* DECLENCHEUR D'EVENEMENT */

var setuplistener = function setuplistener() {
  accueil_aside_left.addEventListener("mouseover", function () {
    accueil_aside_left.style.overflowY = "scroll";
    lien_modifier.style.display = "block";
  });
  accueil_aside_left.addEventListener("mouseleave", function () {
    accueil_aside_left.style.overflowY = "hidden";
    lien_modifier.style.display = "none";
  });
  li_voir_plus.addEventListener("click", function () {
    listenerEvent.seeMore();
  });
  li_voir_moins.addEventListener("click", function () {
    listenerEvent.seeLess();
  });
  next_icon.addEventListener("click", function () {
    listenerEvent.nextSlide();
  });
  next_icon_salon.onclick = listenerEvent.nextSlideSalon;
};
/* Sliders */

/* for (let index = 1; index < statuts_sliders.length; index++) {
    const slide = statuts_sliders[index];
    console.log("index", index);
    next_icon.addEventListener("click", (event)=>{
        /* slide.style.display= "none"      *
        console.log(slide);
  })
} */


function showSlide(index) {
  if (index && typeof index !== "number") {
    return;
  }

  index %= statuts_sliders.length;
  index < 0 ? index += statuts_sliders.length : null;
  slideIndex = index;
  statuts_sliders[slideIndex].style.display = "none";
}

function showSlideSalon(index) {
  if (index && typeof index !== "number") {
    return;
  }

  index %= statuts_sliders.length;
  index < 0 ? index += statuts_sliders.length : null;
  slideIndex = index;
  users_picture[slideIndex].style.display = "none";
}