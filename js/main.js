"use strict";

let countrySelect = document.querySelector(".country-select");
let countryInput = document.querySelector(".country-input");

countrySelect.addEventListener("change", function () {
  if (countrySelect.value === "other") {
    countryInput.disabled = false;
  } else {
    countryInput.value = "";
    countryInput.disabled = true;
  }
});
