import { createTag, createMultiTags } from "./html_functions";

const createSlider = (imageSources) => {
  const allPics = createTag(null, "div", "carousel-pics");
  const prev = createTag(allPics, "div", "previous");
  const prev_arrow = createMultiTags(prev, "em", 2);
  const pictures = createMultiTags(allPics, "img", imageSources.length, "pic");
  const pic_tags = document.querySelectorAll(".pic");
  for (let i = 0; i < pic_tags.length; i++) {
    pic_tags[i].dataset.image = i;
    pic_tags[i].src = imageSources[i];
    pic_tags[i].style.left = `${-(i * 200)}%`;
  }
  const next = createTag(allPics, "div", "next");
  const next_arrow = createMultiTags(next, "em", 2);
};

export { createSlider };
