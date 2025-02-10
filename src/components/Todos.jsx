import React from 'react'
import CustomCheckbox from './ui/CustomCheckbox'

function Todos(props) {
  return (
    <ul className='flex gap-4 flex-col max-h-[60svh] overflow-auto'>
      {props.todos.map((todo, index) => (
        <li key={index} className='flex justify-between items-center w-full border-1 p-3 rounded-md border-gray-800/30'>
          <div className='flex flex-col gap-2 text-gray-800/80 w-full'>
            <h2 className=' font-bold'>{todo.title}</h2>
            <p className='w-[90%]'>{todo.description}</p>
          </div>
          <div className=' mr-5'>
            {/* Checkbox */}
            <CustomCheckbox index={index} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Todos
