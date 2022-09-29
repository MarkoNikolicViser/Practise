  import React,{useRef} from 'react'
import { useForm } from './useForm'

export const Form = () => {
const {mutation,onChange,onSubmit,inputData}=useForm()
const passRef=useRef(null)
console.log(passRef)

  return (
    <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" id='email' value={inputData.email} />
        <input ref={passRef} onChange={onChange} type="password" id='password' value={inputData.password} />
        <button type="submit">
            Submit This Form.
        </button>
    </form>
  )
}
