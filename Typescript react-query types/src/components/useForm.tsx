import React,{useState} from 'react'
import {useMutation,UseMutationResult} from 'react-query'
import {LoginPayload} from './Interfaces'
import {Login} from './ApiRequests'

export const useForm = () => {
    
    const [inputData,setInputData]=useState({
        email:'',
        password:""
    })
    const mutation=useMutation((inputData:LoginPayload)=>Login(inputData),{
        onSuccess:(data)=>alert(JSON.stringify(data))
    })

    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const event=e.target
        setInputData(prev=>({...prev,[event.id]:event.value}))
    }
    const onSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        mutation.mutate(inputData)
    }

  return {onChange, mutation,onSubmit,inputData}
}
