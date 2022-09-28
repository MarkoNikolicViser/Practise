import axios from "axios"
import {LoginPayload,LoginData} from './Interfaces'

const url='http://localhost:3001/'

export const Login=(formData:LoginPayload)=>axios.post<LoginData>(`${url}user/login`,formData)