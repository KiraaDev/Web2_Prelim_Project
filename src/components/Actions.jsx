import React from 'react'
import CustomButton from './ui/CustomButton'

function Actions() {
  return (
    <div className='flex gap-10'>
      {/* add button */}
      <CustomButton
        name="Add"
        backgroundColor="rgba(21,133,189,0.71)"
      />

      {/* delete button */}
      <CustomButton name="Delete"
        backgroundColor="rgba(189,21,21,0.71)"
      />
    </div>
  )
}

export default Actions
