import React, { Component, useState } from "react";
import EventList from "../Components/EventList";
import NavButton from "../Components/NavButton";
import ActionButton from "../Components/ActionButton";
import { useSelector, useDispatch } from 'react-redux'
import store, {clearEvents, changeEdit} from "../eventSlice";

const Events = () => {
    const events = useSelector(state => state.eventsStore.events);
    const isEventEdit = useSelector(state => state.eventsStore.isEventEdit);
    const dispatch = useDispatch();


    function setClearEvents() {
    dispatch(clearEvents());
  }

  function startEventEdit() {
    dispatch(changeEdit(true))
  }

    return (
      <div>
        <NavButton link="/" name="Назад" />
        <EventList store={{events: events, isEventEdit: isEventEdit}}/>
        <ActionButton name="Добавить" handleClick={startEventEdit.bind(this)} />
        <ActionButton name="Очистить" handleClick={setClearEvents.bind(this)} />
      </div>
    );
}

// <ListEvents data={events} />
// <ActionButton onClick={createNewEvent()}>Добавить</ActionButton>
// <ActionButton onClick={cleatEventList()}>Clear</ActionButton>
// <ActionButton onClick={importEvents()}>Import</ActionButton>

export default Events;
