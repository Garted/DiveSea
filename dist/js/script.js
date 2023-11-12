"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const left = document.querySelector(".weekly__left");
  const right = document.querySelector(".weekly__right");
  const wrap = document.querySelector(".weekly__wrap");

  right.addEventListener("click", () => {
    wrap.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  });

  left.addEventListener("click", () => {
    wrap.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  });

  /////Добавляем рандомные проценты в верстку

  const chers = document.querySelectorAll(".recent__redcheers");
  function randomPercent() {
    return Number((Math.random() * 100).toFixed(2));
  }
  setInterval(() => {
    chers.forEach((cher) => {
      cher.innerHTML = `${randomPercent()}%`;
    });
  }, 3500);
});




