import { createTag, createMultiTags } from "./html_functions";

const createDotNavigation = (imageSources) => {
  const nav_bottom = createTag(null, "div", "nav_bottom");
  const nav_dots = createMultiTags(
    nav_bottom,
    "div",
    imageSources.length,
    "nav_dot"
  );
  const all_nav_dots = document.querySelectorAll(".nav_dot");
  for (let i = 0; i < all_nav_dots.length; i++) {
    all_nav_dots[i].dataset.index = i;
  }
};

const markNavDot = () => {
  const allDots = document.querySelectorAll(".nav_dot");
  allDots.forEach((dot) => {
    dot.style.backgroundColor = "white";
    dot.style.border = "1px solid black";
  });
  const pic_tags = document.querySelectorAll(".pic");
  for (let i = 0; i < pic_tags.length; i++) {
    if (pic_tags[i].style.left === "0%") {
      let activePic = pic_tags[i];
      let activeDot = document.querySelector(`[data-index="${i}"]`);
      activeDot.style.backgroundColor = "gray";
      activeDot.style.border = "1px solid white";
    }
  }
};

export { createDotNavigation, markNavDot };
