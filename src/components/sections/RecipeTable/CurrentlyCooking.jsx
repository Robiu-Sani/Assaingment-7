import React from 'react'

export default function CurrentlyCooking(props) {
    const { index , preparing } = props
    const { recipe_name , preparing_time , calories} = preparing
  return (
    <tr>
        <td>{`${index + 1}`}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
    </tr>
  )
}
