import React from 'react'

const Square = ({colorValue="Empty Color Value",hexValue,isDarkText}) => {
  return (
    <section
        className="square"
        style={{backgroundColor:colorValue,
            color:isDarkText? "Black":"White"
        }}
    >
        <p>{colorValue? colorValue:"Empty Value"}</p>
        <p>{hexValue?hexValue:null}</p>
    </section>
  )
}


export default Square