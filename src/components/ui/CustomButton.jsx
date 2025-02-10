import React from 'react'

function CustomButton(props) {
  return (
    <button className="text-white border-gray-800 font-semibold border-1  p-2 px-10 rounded-md cursor-pointer hover:scale-105 active:scale-90 transition-all duration-150 ease-in" 
    style={{
      backgroundColor: props.backgroundColor && props.backgroundColor
    }}>
      {props.name}
    </button>
  )
}

export default CustomButton
