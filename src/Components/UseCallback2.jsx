import React from 'react'

const UseCallback2 = () => {
    console.log("Component Render");
  return (
    <div>UseCallback2</div>
  )
}

export default React.memo(UseCallback2)
