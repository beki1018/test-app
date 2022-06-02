import React from "react";
import EventBlock from "./EventBlock";
import EventEditableBlock from "./EventEditableBlock";

const EventList = (props) => {
  var events = props.store.events.map((event) => {
    return (
        <EventBlock date={event.date} description={event.description} />
    );
  });

  return (
    <div className="eventList">
      {events}
      {props.store.isEventEdit ? <EventEditableBlock /> : <></>}
    </div>
  );
};

export default EventList;
