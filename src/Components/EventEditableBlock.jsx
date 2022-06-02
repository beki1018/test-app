import React from 'react';
import EditButton from './EditButton';
import { useSelector, useDispatch } from 'react-redux'
import store, {addEvent, clearEvents, changeEdit } from "../eventSlice";
import storeEdit, {setEventOnEdit, clearEventOnEdit} from "../eventSliceTwo";
import getDate from '../utils';

function EventEditableBlock(props) {
    let eventOnEdit = useSelector(state => state.editStore.eventOnEdit);
    const dispatch = useDispatch();
    if (eventOnEdit == null) {
        eventOnEdit = {
            date: createDate(),
            description: ""
        }
        dispatch(setEventOnEdit(eventOnEdit))
    }

    function changeEvent(evt) {
        let desc = evt.target.value;
        dispatch(setEventOnEdit({
            date: eventOnEdit.date,
            description: desc}));
    }

    function createDate() {
        var date = new Date();
        var day = date.getDate();
        date.setDate(day + 7);
        return getDate(date);
      }

      function createEvent() {
        dispatch(addEvent(eventOnEdit));
        dispatch(clearEventOnEdit());
        dispatch(changeEdit(false));
    }

        return(
            <div className='eventInput'>
                <span className='eventBlockDate'>{eventOnEdit.date}</span>
                <form className='eventForm'>
                    <input type='text' name='description' value={eventOnEdit.description} onChange={changeEvent}/>
                </form>
                <EditButton handleClick={() => createEvent()} name="Создать"/>
            </div>
        )
}

export default EventEditableBlock;