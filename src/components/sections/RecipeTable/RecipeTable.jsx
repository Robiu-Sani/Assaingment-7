import React from 'react'
import AddCook from './AddCook'
import CurrentlyCooking from './CurrentlyCooking'

export default function RecipeTable(props) {
  const { addCook , handleAddPrepear , addPrepear , totalCalories , totalTime ,  } = props

  



  return (
    <div className="w-full">
      <div className='w-full p-2 rounded-md shadow-md h-auto flex flex-col justify-center items-center' style={{border:'1px solid rgb(197, 195, 195)'}}>
      <h2 className='text-2xl py-2 font-extrabold text-black w-[80%] text-center' style={{borderBottom:'1px solid rgb(197, 195, 195)'}}>Want to Cook table: {`${addCook.length < 10 ? '0'+addCook.length : addCook.length}`}</h2>
      
      <table className={`custom-table overflow-scroll my-3 ${addCook.length > 0 ? 'block' : 'hidden'}`}>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {addCook.map( (cookitem , idx) => <AddCook key={idx} index={idx} handleAddPrepear={handleAddPrepear} cookitem={cookitem}></AddCook>)}
    </tbody>
  </table>


      <h2 className='text-2xl py-2 mt-10 font-extrabold text-black w-[80%] text-center' style={{borderBottom:'1px solid rgb(197, 195, 195)'}}>Currently cooking:  {`${addPrepear.length < 10 ? '0'+addPrepear.length : addPrepear.length}`}</h2>

      <table className={`custom-table overflow-scroll my-3 ${addPrepear.length > 0 ? 'block' : 'hidden'}`}>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {addPrepear.map( (preparing , idx) => <CurrentlyCooking key={idx} index={idx} preparing={preparing}></CurrentlyCooking>)}
    </tbody>
    <tfoot>
      <tr>
        <td  colSpan="2" className='text-black font-bold text-right'>Total Time : { `${totalTime > 60 ? Math.floor(totalTime / 60)+':'+((totalTime % 60) > 9 ? totalTime % 60 : '0'+totalTime % 60)  + ' hours' : totalTime + ' munites'}`}</td>
        <td  colSpan="2" className='text-black font-bold text-right'>Total Calories : {`${totalCalories}`} Calories</td>
      </tr>
    </tfoot>
  </table>
    </div>
    </div>
  )
}
