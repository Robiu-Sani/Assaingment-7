import { IoSearchSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";

export default function NavBar() {
  const [navitem , setNavitem] = useState(false)
  const [callSearch, setCallSearch] = useState(false)

  const handleNav = () => {
    setNavitem(!navitem)
  }
  const handleCallSearch = () => {
    setCallSearch(!callSearch)
  }

  const navCall = navitem == false ? 'hidden' : 'block';
  const searchCall = callSearch == false ? '-top-14' : 'top-14';
  return (
    <div className="w-full">
      <div className="container mx-auto px-2 py-4 flex justify-between items-center">
        <h1 className="text-xl flex items-center gap-4 sm:text-3xl font-extrabold"><CgMenuRound onClick={handleNav} className="block md:hidden"/> Recipe <span className="text-green-500">Calories</span></h1>
            <div className={`w-[150px] md:static absolute left-5 top-12 bg-white z-10 rounded-md py-3 md:block ${navCall}`}>
            <ul className="flex justify-center items-center w-full flex-col md:flex-row gap-8 ">
                <li className="hover:text-green-600 w-full text-center text-gray-800"><a href="#">Home</a></li>
                <li className="hover:text-green-600 w-full text-center text-gray-800"><a href="#">Recipes </a></li>
                <li className="hover:text-green-600 w-full text-center text-gray-800"><a href="#">About</a></li>
                <li className="hover:text-green-600 w-full text-center text-gray-800"><a href="#">Search</a></li>
            </ul>
            </div>
        
        <div className="flex justify-center items-center gap-3">
            <IoSearchSharp onClick={handleCallSearch} className="block cursor-pointer text-2xl lg:hidden"/>
            <div className={`right-1/2 lg:translate-x-0 translate-x-1/2 lg:block lg:static absolute ${searchCall}`}>
            <label className="bg-gray-200 w-[250px] flex rounded-full py-2 pl-9 items-center relative text-md">
                <IoSearchSharp className="absolute left-3 z-10"/>
                <input type="search" className="search" placeholder="Search"/>
            </label>
            </div>
            <a href="#" className="bg-green-500 p-2 text-xl rounded-full"><FaRegUserCircle /></a>
        </div>
      </div>
    </div>
  )
}
