import { FaFacebook} from "react-icons/fa";
import playstore from '../../images/playstore.png'

export default function Footer() {
  return (
    <footer className='bg-slate-800 w-full px-2 py-10'>
      <div className="container gap-9 justify-center items-center mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full py-8 px-3">
        <h1 className="text-xl my-4 flex text-white items-center gap-4 sm:text-3xl font-extrabold"> Recipe <span className="text-green-500">Calories</span></h1>
        <p className="mb-4 text-white text-md ">Indulge in our savory recipe, bursting with flavor and boasting a calorie-conscious twist. Savor each bite of our nutritious creation, ensuring guilt-free satisfaction.</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={playstore} alt="" className="w-1/2"/>
        </div>
      </div><hr />
      <div className="flex">
        <span className="text-white p-3">2024 @ simple footer design</span>
      </div>
    </footer>
  )
}
