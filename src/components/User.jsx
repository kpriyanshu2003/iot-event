import { useState } from "react";
import SideBar from "./User/SideBar";
import Details from "./User/Details";
import Cards from "./User/Cards";
import "../styles/user.css"

export default function User() {
  const update = (n) => {
    switch (n) {
      case "detail":
        setCurrent({
          page: <Details />,
          id: 0,
        });
        break;
      case "card":
        setCurrent({
          page: <Cards update={update} />,
          id: 2,
        });
        break;
      default:
        alert("error");
        break;
    }
  };
  const [current, setCurrent] = useState({
    page: <Details />,
    id: 0,
  });
  return (
    <div class="user-container">
      <div class="user-container-width">
        <SideBar update={update} value={current.id} />
      </div>
      <div class="user-container-pos"></div>
      <div class="user-container-width-current ">{current.page}</div>
    </div>
  );
}
