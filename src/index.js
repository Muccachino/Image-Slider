import "./styles.scss";
import { createTag, createMultiTags } from "./html_functions";
import { createSlider } from "./create_slider";
import { createDotNavigation, markNavDot } from "./create_dot_navigation";

let allPicsSources = [
  "https://images.unsplash.com/photo-1589152608358-0b4d13699140?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1604183667964-bce80268b39d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1511174944925-a99f10911d45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1319&q=80",
  "https://images.unsplash.com/photo-1628587258882-9964452f2831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1628627260268-ef0da5c9c10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1629204884772-fe5703498336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1532896374032-fdffb11e2b8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

createSlider(allPicsSources);
createDotNavigation(allPicsSources);
markNavDot();

// Event Listeners

const allDots = document.querySelectorAll(".nav_dot");
allDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const pic_tags = document.querySelectorAll(".pic");
    let index = dot.dataset.index;
    let activePic = document.querySelector(`[data-image="${index}"]`);
    for (let i = index; i < pic_tags.length; i++) {
      pic_tags[i].style.left = `${-(i - index) * 200}%`;
    }
    for (let i = index; i >= 0; i--) {
      pic_tags[i].style.left = `${-(i - index) * 200}%`;
    }
    markNavDot();
  });
});

const btn_next = document.querySelector("#next");
btn_next.addEventListener("click", () => {
  const pic_tags = document.querySelectorAll(".pic");
  if (pic_tags[pic_tags.length - 1].style.left != "0%") {
    for (let i = 0; i < pic_tags.length; i++) {
      let leftValue = parseInt(pic_tags[i].style.left, 10);
      pic_tags[i].style.left = `${leftValue + 200}%`;
    }
    markNavDot();
  }
});

const btn_prev = document.querySelector("#previous");
btn_prev.addEventListener("click", () => {
  const pic_tags = document.querySelectorAll(".pic");
  if (pic_tags[0].style.left != "0%") {
    for (let i = 0; i < pic_tags.length; i++) {
      let leftValue = parseInt(pic_tags[i].style.left, 10);
      pic_tags[i].style.left = `${leftValue - 200}%`;
    }
    markNavDot();
  }
});
