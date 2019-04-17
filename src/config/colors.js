import shader from "shader";

export const green = "#52C41A";
export const main = "#000117";
export const blue = "#0ea0e7";
export const green_ligh = shader(green, -1.0);
export const red = "#FF4D4F";
export const red_light = "#FFE9E9";

export const shadows = {
    shadow: ("rgba(46, 41, 51, 0.08) 0px 1px 2px",
    "rgba(71, 63, 79, 0.08) 0px 2px 4px"),

    transition: ("transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
    "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s")
};
