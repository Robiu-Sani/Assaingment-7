import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Recipe from './Recipe'

export default function Recipes(props) {
  
  const [recipes , setRecipes] = useState([])

  useEffect(() => {
    fetch('./recipes.json').then(req => req.json()).then(item => setRecipes(item))
  },[])
  return (
    <div className='w-full col-span-1 sm:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3'>
      {recipes.map(recipe => <Recipe handleAddCook={props.handleAddCook} key={recipe.recipe_id} recipe={recipe}></Recipe>)}
    </div>
  )
}
