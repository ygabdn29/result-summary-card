"use strict";

const data = function () {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      const [...dataJson] = data;
      return dataJson;
    });
};
