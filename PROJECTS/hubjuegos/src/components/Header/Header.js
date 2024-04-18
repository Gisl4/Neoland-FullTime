import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils/changeColor";
import { initControler } from "../../utils/Route";
import "./Header.css";

const template = () => `
  <img
    src="https://res.cloudinary.com/dhshflrbz/image/upload/v1713198363/f620c11a290a6fdccb49409c56c6bed3-game-zone-badge_o3yxja.webp"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dhshflrbz/image/upload/v1713201147/4621967_gmwf8h.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dhshflrbz/image/upload/v1713201026/550484_r23v3t.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dhshflrbz/image/upload/v1713197902/3094700_rarbkx.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;

const addListeners = () => {
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    const color = changeColorRGB();
    document.body.style.background = color;
  });

  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });

  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);

    initControler("Login");
  });
};

export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
