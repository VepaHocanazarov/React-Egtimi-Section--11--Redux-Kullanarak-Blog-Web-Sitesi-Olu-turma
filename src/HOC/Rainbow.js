import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours =["blue","yellow","black","grrenyellow","pink","red"];
    const randomcolor= colours[Math.floor(Math.random()*6)]  // Math.floor => sayı 4.6 ise 4 yapar veya 5.6 ise 5 yapar
    const className = randomcolor+'-text';
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default Rainbow
