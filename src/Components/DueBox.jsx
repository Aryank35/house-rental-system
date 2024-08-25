import React from 'react'


const DueBox = (props) => {
  return (
    <div className='my-7 space-y-3 bg-blue-300 mx-2 rounded-xl px-2 py-5'>
        <div className='flex justify-between mx-5 items-center text-center'>
            <div className='font-bold text-xl'>{props.month}</div>
            <div className='text-red-800 text-lg font-semibold'>{props.stats}</div>
        </div>
        <div className='flex justify-between mx-5 items-center text-center'>
            <div className='text-sm '>{props.dop}</div>
            <div className='bg-blue-600 text-white py-2 px-4 rounded-xl font-semibold text-center '>{props.boxText}</div>
        </div>
    </div>
  )
}

export default DueBox