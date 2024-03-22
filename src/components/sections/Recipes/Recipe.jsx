import { MdAccessTime } from "react-icons/md";
import { GiSmallFire } from "react-icons/gi";

export default function Recipe(props) {
    const { handleAddCook , recipe} = props
    const {recipe_id , recipe_name , short_description , ingredients , preparing_time , calories , recipe_image} = recipe
  return (
    <div className='w-full p-2 rounded-md shadow-md ' style={{border:'1px solid rgb(197, 195, 195)'}}>
      <div className="rounded-md w-full h-[270px] overflow-hidden">
        <img src={recipe_image} alt={`${recipe_name}`} className="w-full h-full rounded-md hover:scale-110"/>
      </div>
        <h2 className='text-2xl my-4 font-bold text-black'>{recipe_name}</h2>
        <p className='text-md text-gray-800 my-3'>{short_description}</p><hr />
        <h3 className='text-xl text-black font-bold my-4 mx-2'>ingredients : {ingredients.length}</h3>
        <ul className='list-disc pl-6 mb-3'>
          {ingredients.map((ingredient, idx) => <li key={idx}> {ingredient}</li>)}
        </ul><hr />
        <div className="mt-3 flex gap-8">
            <span className="flex gap-3 justify-center items-center"><MdAccessTime />{preparing_time} minutes</span>
            <span className="flex gap-3 justify-center items-center"><GiSmallFire />{calories} Calories</span>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="btn bg-green-500 rounded-full my-4" onClick={() => handleAddCook(recipe)}>Want to Cook</button>
        </div>
    </div>
  )
}
