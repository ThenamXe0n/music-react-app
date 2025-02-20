import React from 'react'

function CoustomButton({btnName}) {
  return (
    <button>{btnName ? btnName : "no name"}</button>
  )
}

export default CoustomButton