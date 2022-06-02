import React, { Component, useState } from "react";
import EventList from "../Components/EventList";
import NavButton from "../Components/NavButton";
import ActionButton from "../Components/ActionButton";
import { useSelector, useDispatch } from "react-redux";
import store, { clearEvents, changeEdit } from "../eventSlice";

const Events = () => {
  const events = useSelector((state) => state.eventsStore.events);
  const isEventEdit = useSelector((state) => state.eventsStore.isEventEdit);
  const dispatch = useDispatch();

  function setClearEvents() {
    dispatch(clearEvents());
  }

  function startEventEdit() {
    dispatch(changeEdit(true));
  }

  return (
    <div className="events">
      <div className="eventText">
        <NavButton link="/" name="<" className="eventBack"/>
        <span className="eventTitle">События</span>
      </div>
      <div className="eventListContainer">
        <EventList store={{ events: events, isEventEdit: isEventEdit }} />
        <div className="eventMenu">
        <ActionButton className='clearEvent' name="Очистить" handleClick={setClearEvents.bind(this)} />
        <ActionButton className='addEvent' name="+" handleClick={startEventEdit.bind(this)} />
        </div>
      </div>
    </div>
  );
};

export default Events;
