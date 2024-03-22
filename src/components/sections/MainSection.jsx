import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Toast from '../toast/Toast'
import Recipes from './Recipes/Recipes'
import RecipeTable from './RecipeTable/RecipeTable'

export default function MainSection() {
  const [addCook , setAddCook] = useState([])
  const [addPrepear , setAddPrepear] = useState([])
  const [totalTime , setTotalTime ] =useState(0)
  const [totalCalories , setTotalCalories] = useState(0)
  const [toast , setToast] = useState(false)

  const handleAddCook = item => {
    const isItemPresent = addCook.find(data => data.recipe_id === item.recipe_id);
    const updatedCook = isItemPresent ? addCook : [...addCook, item];
    isItemPresent ? setToast(!toast) : setToast(toast);
    setAddCook(updatedCook);
  }

  const handleAddPrepear = (item , time , calories) => {
    const currentPreparing = addPrepear.find(prep => prep.recipe_id === item.recipe_id)
    const updateCurrentPrepare = currentPreparing? addPrepear : [...addPrepear , item];
    const Time = totalTime + time
    const Calories = totalCalories + calories
    const modifyAddCook = addCook.filter(cook => cook.recipe_id !== item.recipe_id)
    currentPreparing ?  setToast(!toast) : setToast(toast);
    setAddPrepear(updateCurrentPrepare)
    setTotalTime(Time)
    setTotalCalories(Calories)
    setAddCook(modifyAddCook)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setToast(false)
    },5000)
    return () => clearTimeout(timeOut)
  })
 
  return (
    <section className='container mx-auto py-10 px-2'>
      {toast ? <Toast /> : ''}
      <h1 className='text-4xl font-bold text-center my-5'>Our Recipes</h1>
      <p className='text-xl mx-auto mb-5 text-center max-w-[650px]'> A culinary adventure awaits with our diverse selection of delectable dishes, satisfying every palate with flavor and innovation.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-10">
        <Recipes handleAddCook={handleAddCook} />
        <RecipeTable handleAddPrepear={handleAddPrepear} totalTime={totalTime} addPrepear={addPrepear} totalCalories={totalCalories} addCook={addCook} />
      </div>
    </section>
  );
}