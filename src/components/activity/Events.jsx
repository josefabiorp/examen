import "../../index.css";

export function Events({ title, speaker, image }) {
  return (
    <div className="grid grid-cols-[20%_80%] gap-4">
        <div>
            <img className="rounded-lg" src={`${image}`} alt="upcoming event" />
        </div>
        <div className="flex justify-center flex-col">
            <h4 className="font-bold text-sm">{title}</h4>
            <p className="font-normal text-gray-800">{speaker}</p>
        </div>
    </div>
  )
}
