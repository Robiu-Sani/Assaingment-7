import { GiToaster } from "react-icons/gi";

export default function Toast() {

  return (
    <div className={`fixed p-3 top-2 right-2 overflow-hidden bg-cyan-950 rounded-md h-auto w-auto sm:min-w-[300px] sm:min-h-[80px]`} >
      <div className="flex justify-center gap-4 items-center min-w-full min-h-[60px]">
        <GiToaster className="text-2xl text-white"/>
        <div className="w-full">
            <h1 className="text-xl text-white my-1">Alert Message</h1>
            <p className="text-sm text-white">You alrady clicked to add this item</p>
        </div>
      </div>
      <div className="w-full animation h-[5px] bg-sky-400 absolute left-0 bottom-0"></div>
    </div>
  )
}
