import React from 'react'
import {toast} from 'react-toastify'

export const App = () => {
  const RandomColorGenerator=(min:number,max:number)=>{
    const randomNumber=Math.floor(Math.random() * (max - min + 1) + min)
    return `#FF${randomNumber}`
  }
  const correctColor=RandomColorGenerator(1000,9999)
  const arr=shuffleArray([RandomColorGenerator(1000,9999),RandomColorGenerator(1000,9999),correctColor])
  function shuffleArray (array:any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  const buttonClick=(e: any)=>{
    const option=e.target.innerHTML
    if(option===correctColor)
    toast.success('Correct color')
    else{
      toast.error('Wrong color')
    }
  }
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
    <section style={{background:correctColor}} className={sectionStyle}>
    </section>
    <div className='flex w-72 justify-between pt-5'>
    {arr.map(color=><button onClick={buttonClick} className={buttonStyle} key={color}>{color}</button>)}
    </div>
    </div>
  )
}
const sectionStyle=`flex
items-center
justify-center
w-48
h-48
`
const buttonStyle=`border-2
border-gray-600
rounded-lg
p-2`
