import React from 'react'
import {toast} from 'react-toastify'

export const App = () => {
  const [counter,setCounter]=React.useState(0)
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
    if(option===correctColor){
    toast.success('Correct color')
      setCounter(prev=>prev+1)
  }
    else{
      toast.error('Wrong color')
      setCounter(0)
    }
  }
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <i className='text-xl pb-10'>Figure out the hex code for the color in the box</i>
      <h1 className='font-medium text-2xl pb-5'>Score: {counter}</h1>
    <section style={{background:correctColor}} className={sectionStyle}/>
    <div className='flex w-72 justify-between pt-5'>
    {arr.map((color:string)=><button onClick={buttonClick} className={buttonStyle} key={color}>{color}</button>)}
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
