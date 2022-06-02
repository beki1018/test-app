import React from "react";
import NavButton from "../Components/NavButton";

const Home = () => {
  return (
    <div>
      <div className="eventText">
        <span className="eventTitle">Тестовое задание</span>
      </div>
      <NavButton link="/events" name="События" className="NavButton"/>
    </div>
  );
};

export default Home;
