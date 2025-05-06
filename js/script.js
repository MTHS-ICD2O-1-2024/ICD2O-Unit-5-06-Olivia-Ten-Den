// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 5, 2025
// This file contains the JS functions for index.html

"use strict"

function multiply() {
  let counter = 0;
  let answer = 0;
  let firstInteger = parseInt(document.getElementById("first-integer").value);
  let secondInteger = parseInt(document.getElementById("second-integer").value);

  while (counter < secondInteger) {
    counter = counter + 1;
    answer = answer + firstInteger;
  }
  document.getElementById('result').innerHTML = "<p>The product is " + answer + ".</p>";
}
