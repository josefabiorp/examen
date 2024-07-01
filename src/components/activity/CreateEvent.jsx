
import { useNewEvent } from "../hooks/useNewEvent";
import "../../index.css";

export function CreateEvent({addEvent}) {

  function onCreateEvent() {
   
    const { newEvent } = useNewEvent();
    addEvent( newEvent );
  }

  return (
    <>
      
    </>
  );
}
