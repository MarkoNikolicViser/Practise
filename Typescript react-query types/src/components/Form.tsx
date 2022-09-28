import React from 'react'
import { useForm } from './useForm'

export const Form = () => {
const {mutation,onChange,onSubmit,inputData}=useForm()

  return (
    <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" id='email' value={inputData.email} />
        <input  onChange={onChange} type="password" id='password' value={inputData.password} />
        <button type="submit">
            Submit This Form.
        </button>
    </form>
  )
}
