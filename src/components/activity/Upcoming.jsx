import { useFetchData } from "../hooks/useFetchData.js";
import { useRandomImage } from "../hooks/useRandomImage.js";

import { Events } from "./Events.jsx";
import { CreateEvent } from "./CreateEvent.jsx";
import { Loading } from "../ui/Loading.jsx";
import { Calendario } from "../ui/calendario.jsx";

import "../../index.css";

export function Upcoming() {
  
  const { data, isLoading } = useFetchData();
  const { randomImage } = useRandomImage();

  const createEvents = (items) => {
    return items.map( item => <Events 
        key={item.id}
        title={item.company.catchPhrase}
        speaker={item.firstname+" "+item.lastname}
        image={randomImage()}
        />)
  }

  const onUpcomingEvent = (event) => {
    console.log(event);
  }

  return (
    <>
    <div className="grid grid-cols-2 gap-4  px-5 bg-gradient-to-r from-sky-300 to-white" >
      <div>
    <Calendario/>
</div>
    <div className="start-col-2">
        <div className="grid gap-4 my-5">
        <h2 className="font-bold text-2xl">Eventos</h2>
            { isLoading ? <Loading /> : createEvents(data) }
        </div>
      
        <CreateEvent addEvent={onUpcomingEvent} />
        </div> </div>
    </>
  
  );
}
