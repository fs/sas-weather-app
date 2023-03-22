import rainyIcon from "img/rainy.png";
import sunnyIcon from "img/sunny.png";
import cloudyIcon from "img/cloudy.png";
import thunderIcon from "img/thunder.png";
import snowyIcon from "img/snowy.png";

const sunnyTheme = {
  backgroundColor: "#57AFD9",
  fontColor: "#000000",
};

const rainyTheme = {
  backgroundColor: "#484C8A",
  fontColor: "#000000",
};

const cloudyTheme = {
  backgroundColor: "#95999E",
  fontColor: "#000000",
};

const thunderTheme = {
  backgroundColor: "#5C4582",
  fontColor: "#000000",
};

const snowyTheme = {
  backgroundColor: "#6BA7CC",
  fontColor: "#000000",
};

const nightTheme = {
  backgroundColor: "#712B75",
  fontColor: "#F2FBFFB2",
};

const defaultTheme = {
  backgroundColor: "#ACB0B0",
  fontColor: "#F2F2F2",
};

const commonStyles = {
  bgWhite: "#EFFFFD",
  bgSearch: "#F2FBFF",
  colorBlack: "#000000",
  colorWhite: "#ffffff",
};

const themes = [
  {
    codes: [
      1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
      1198, 1201, 1240, 1243, 1246, 1261, 1264,
    ],
    name: rainyTheme,
    icon: rainyIcon,
  },
  { codes: [1000], name: sunnyTheme, icon: sunnyIcon },
  {
    codes: [1003, 1006, 1009, 1030, 1135],
    name: cloudyTheme,
    icon: cloudyIcon,
  },
  {
    codes: [1087, 1273, 1276, 1279, 1282],
    name: thunderTheme,
    icon: thunderIcon,
  },
  {
    codes: [
      1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
      1237, 1249, 1252, 1255, 1258,
    ],
    name: snowyTheme,
    icon: snowyIcon,
  },
];

export {
  sunnyTheme,
  rainyTheme,
  thunderTheme,
  snowyTheme,
  cloudyTheme,
  nightTheme,
  commonStyles,
  defaultTheme,
  themes,
};
