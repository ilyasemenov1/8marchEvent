import { isWebp } from "./modules/isWebpSupport.js";
import LazyLoad from "vanilla-lazyload";
import { Quiz } from "./modules/quiz.js";

const lazyLoadInstance = new LazyLoad({
    callback_error: (img) => {
        img.setAttribute("srcset", "fallback_image@1x.jpg 1x, fallback_image@2x.jpg 2x");
        img.setAttribute("src", "fallback_image@1x.jpg");
      }
});
lazyLoadInstance.update();

isWebp();

let quiz = new Quiz();
quiz.event();
