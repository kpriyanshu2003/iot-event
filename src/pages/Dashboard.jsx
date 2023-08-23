import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Home from "../components/Home";
import Transaction from "../components/Transactions";

export default function Dashboard() {
  const [current, setCurrent] = useState({ page: <Home />, id: 0 });

  const update = (n) => {
    switch (n) {
      case "home":
        setCurrent({ page: <Home />, id: 0 });
        break;
      case "trans":
        setCurrent({ page: <Transaction />, id: 1 });
        break;
      case "wallet":
      case "user":
      case "notif":
      case "logout":
        alert("Coming Soon");
        break;
      default:
        alert("Error");
        break;
    }
  };
  return (
    <div>
      <div className="">
        <SideBar update={update} value={current.id} />
      </div>
      <div className="md:ml-32 ml-24 mt-16 mb-10">{current.page}</div>
    </div>
  );
}
