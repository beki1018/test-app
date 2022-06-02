import React from "react";
import EventBlock from "./EventBlock";
import EventEditableBlock from "./EventEditableBlock";

const EventList = (props) => {
  var events = props.store.events.map((event) => {
    return (
      <div className="events">
        <EventBlock date={event.date} description={event.description} />
      </div>
    );
  });

  return (
    <div>
      {events}
      {props.isEventEdit ? <EventEditableBlock /> : <></>}
    </div>
  );
};

export default EventList;
