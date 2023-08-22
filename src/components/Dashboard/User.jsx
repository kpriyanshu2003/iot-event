import { useState } from "react";
import SideBar from "./User/SideBar";
import Details from "./User/Details";
import Cards from "./User/Cards";

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
    <div className="flex items-top font-raleway pr-10">
      <div className="w-2/12">
        <SideBar update={update} value={current.id} />
      </div>
      <div className="h-[600px] w-0.5 bg-[#DADADA] mx-10"></div>
      <div className="w-10/12 ">{current.page}</div>
    </div>
  );
}
