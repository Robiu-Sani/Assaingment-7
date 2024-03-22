import React from 'react'

export default function AddCook(props) {
    const { cookitem , index , handleAddPrepear } = props
    const {recipe_name, preparing_time, calories} = cookitem
  return (
    <tr>
        <td>{`${index + 1}`}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
        <td><span onClick={() => handleAddPrepear(cookitem , preparing_time , calories)} className='p-2 cursor-pointer text-white text-[14px] font-bold bg-green-500 rounded-full'>Preparing</span></td>
    </tr>
  )
}
